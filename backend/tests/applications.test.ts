import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { OFFER, STUDENT } from "../src/db/seed/seedIds.ts";
import { createTestApp, tokenFor } from "./helpers/testApp.ts";
import { createTestDatabase } from "./helpers/testDatabase.ts";

let app: ReturnType<typeof createTestApp>;

beforeEach(() => {
  app = createTestApp();
});

const applyAs = (studentId: number, offerId: number, body: object) =>
  request(app)
    .post(`/offers/${offerId}/applications`)
    .set("Authorization", tokenFor("STUDENT", studentId))
    .send(body);

describe("POST /offers/:offerId/applications", () => {
  it("refuse une requête sans session", async () => {
    const response = await request(app)
      .post(`/offers/${OFFER.FLEET_APP}/applications`)
      .send({});

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("UNAUTHENTICATED");
  });

  describe("GET /applications", () => {
    it("retourne uniquement les candidatures de l'étudiant connecté", async () => {
      const response = await request(app)
        .get("/applications?studentId=1")
        .set("Authorization", tokenFor("STUDENT", STUDENT.INES_HADDAD));

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body.map((application: { offerId: number }) => application.offerId)).toEqual([
        OFFER.FLEET_APP,
        OFFER.BILLING_API,
      ]);
      expect(response.body.map((application: { status: string }) => application.status)).toEqual([
        "IN_PROGRESS",
        "WITHDRAWN",
      ]);
      expect(response.body[0]).toMatchObject({
        offerTitle: "Application React de gestion de flotte",
        companyShortName: "Lumen Digital",
        academicYear: "2026-2027",
        period: "P2",
      });

      expect(response.body[0]).not.toHaveProperty("studentId");
    });

    it("ne mélange pas les candidatures de deux étudiants", async () => {
      const lucas = await request(app)
        .get("/applications")
        .set("Authorization", tokenFor("STUDENT", STUDENT.LUCAS_DUPONT));
      const youssef = await request(app)
        .get("/applications")
        .set("Authorization", tokenFor("STUDENT", STUDENT.YOUSSEF_EL_AMRANI));

      expect(lucas.status).toBe(200);
      expect(youssef.status).toBe(200);
      expect(lucas.body).toHaveLength(1);
      expect(youssef.body).toHaveLength(1);
      expect(lucas.body[0].offerId).toBe(OFFER.FLEET_APP);
      expect(youssef.body[0].offerId).toBe(OFFER.BILLING_API);
    });

    it.each([
      ["sans session", undefined],
      ["administrateur", tokenFor("ADMIN", 1)],
      ["contact", tokenFor("CONTACT", 2)],
    ])("refuse l'accès à %s", async (_profile, token) => {
      const requestBuilder = request(app).get("/applications");
      if (token !== undefined) requestBuilder.set("Authorization", token);

      const response = await requestBuilder;
      expect(response.status).toBe(token === undefined ? 401 : 403);
      expect(response.body.error.code).toBe(token === undefined ? "UNAUTHENTICATED" : "FORBIDDEN");
    });
  });

  describe("PATCH /applications/:id/withdraw", () => {
    it("retire sa candidature en cours sans supprimer la ligne", async () => {
      const response = await request(app)
        .patch("/applications/1/withdraw")
        .set("Authorization", tokenFor("STUDENT", STUDENT.LUCAS_DUPONT));

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("WITHDRAWN");
      const mine = await request(app)
        .get("/applications")
        .set("Authorization", tokenFor("STUDENT", STUDENT.LUCAS_DUPONT));
      expect(mine.body).toHaveLength(1);
      expect(mine.body[0]).toMatchObject({ id: 1, status: "WITHDRAWN" });

      const reapply = await applyAs(STUDENT.LUCAS_DUPONT, OFFER.FLEET_APP, {});
      expect(reapply.status).toBe(201);
    });

    it.each([
      ["inconnue", 999, STUDENT.LUCAS_DUPONT, 404],
      ["d'un autre étudiant", 1, STUDENT.INES_HADDAD, 404],
      ["retenue", 3, STUDENT.MATEUSZ_KOWALSKI, 409],
      ["non retenue", 4, STUDENT.LEA_MERTENS, 409],
      ["déjà retirée", 5, STUDENT.INES_HADDAD, 409],
    ])("refuse une candidature %s", async (_case, id, studentId, expectedStatus) => {
      const response = await request(app)
        .patch(`/applications/${id}/withdraw`)
        .set("Authorization", tokenFor("STUDENT", studentId));

      expect(response.status).toBe(expectedStatus);
    });

    it("refuse les profils non étudiants et les requêtes sans session", async () => {
      const withoutSession = await request(app).patch("/applications/1/withdraw");
      expect(withoutSession.status).toBe(401);

      const admin = await request(app)
        .patch("/applications/1/withdraw")
        .set("Authorization", tokenFor("ADMIN", 1));
      expect(admin.status).toBe(403);
    });
  });

  it("crée une candidature avec un message facultatif", async () => {
    const response = await applyAs(STUDENT.DMYTRO_KOVALENKO, OFFER.FLEET_APP, {
      message: "Je suis très motivé par ce sujet.",
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      offerId: OFFER.FLEET_APP,
      message: "Je suis très motivé par ce sujet.",
      status: "IN_PROGRESS",
    });
  });

  it("accepte une candidature sans message", async () => {
    const response = await applyAs(STUDENT.DMYTRO_KOVALENKO, OFFER.DATA_QUALITY, {});

    expect(response.status).toBe(201);
    expect(response.body.message).toBeNull();
  });

  it("refuse une offre qui n'est pas publiée", async () => {
    const response = await applyAs(STUDENT.DMYTRO_KOVALENKO, OFFER.CLIENT_PORTAL, {});

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_STATE");
  });

  it("retourne 404 pour une offre inconnue", async () => {
    const response = await applyAs(STUDENT.DMYTRO_KOVALENKO, 999, {});

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("NOT_FOUND");
  });

  it("refuse les profils non étudiants", async () => {
    const response = await request(app)
      .post(`/offers/${OFFER.FLEET_APP}/applications`)
      .set("Authorization", tokenFor("ADMIN", 1))
      .send({});

    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("FORBIDDEN");
  });

  it("bloque tout doublon non retiré, quel que soit son statut", async () => {
    const inProgress = await applyAs(STUDENT.LUCAS_DUPONT, OFFER.FLEET_APP, {});
    expect(inProgress.status).toBe(409);

    for (const status of ["SELECTED", "REJECTED"] as const) {
      const db = createTestDatabase();
      db.prepare("UPDATE applications SET status = ? WHERE id = 1").run(status);
      app = createTestApp(db);
      const response = await applyAs(STUDENT.LUCAS_DUPONT, OFFER.FLEET_APP, {});
      expect(response.status).toBe(409);
      expect(response.body.error.code).toBe("APPLICATION_EXISTS");
    }
  });

  it("autorise une nouvelle candidature après un retrait", async () => {
    const response = await applyAs(STUDENT.INES_HADDAD, OFFER.BILLING_API, {
      message: "Je souhaite renouveler ma candidature.",
    });

    expect(response.status).toBe(201);
    expect(response.body.offerId).toBe(OFFER.BILLING_API);
  });

  it("valide le corps et la longueur du message", async () => {
    const invalidBody = await applyAs(STUDENT.DMYTRO_KOVALENKO, OFFER.INTERNAL_CHATBOT, {
      message: " ".repeat(3),
    });
    expect(invalidBody.status).toBe(400);
    expect(invalidBody.body.error.code).toBe("INVALID_BODY");

    const tooLong = await applyAs(STUDENT.DMYTRO_KOVALENKO, OFFER.INTERNAL_CHATBOT, {
      message: "x".repeat(2001),
    });
    expect(tooLong.status).toBe(400);
    expect(tooLong.body.error.code).toBe("INVALID_BODY");
  });
});
