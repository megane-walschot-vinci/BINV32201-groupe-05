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
