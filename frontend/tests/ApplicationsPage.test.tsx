import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ApplicationsPage from "../src/pages/ApplicationsPage.tsx";
import { studentUser, stubFetch } from "./helpers/fetchMock.ts";

const application = (status: string, id: number) => ({
  id,
  offerId: id,
  offerTitle: `Offre ${id}`,
  companyShortName: "Entreprise",
  academicYear: "2026-2027",
  period: "P2",
  message: null,
  status,
  appliedAt: "2026-10-01 10:00:00",
});

describe("ApplicationsPage", () => {
  it("affiche les quatre statuts en français", async () => {
    stubFetch({
      "/api/applications": () =>
        Response.json([
          application("IN_PROGRESS", 1),
          application("SELECTED", 2),
          application("REJECTED", 3),
          application("WITHDRAWN", 4),
        ]),
    });

    render(<ApplicationsPage user={studentUser} token="jeton" onUnauthorized={vi.fn()} />);

    expect(await screen.findByText("En cours")).toBeInTheDocument();
    expect(screen.getByText("Retenue")).toBeInTheDocument();
    expect(screen.getByText("Non retenue")).toBeInTheDocument();
    expect(screen.getByText("Retirée")).toBeInTheDocument();
  });

  it("affiche la liste vide", async () => {
    stubFetch({ "/api/applications": () => Response.json([]) });

    render(<ApplicationsPage user={studentUser} token="jeton" onUnauthorized={vi.fn()} />);

    expect(await screen.findByText("Aucune candidature à afficher.")).toBeInTheDocument();
  });

  it("gère une erreur et une session expirée", async () => {
    stubFetch({ "/api/applications": () => new Response(null, { status: 500 }) });

    render(<ApplicationsPage user={studentUser} token="jeton" onUnauthorized={vi.fn()} />);

    expect(await screen.findByRole("alert")).toHaveTextContent("statut 500");

    const onUnauthorized = vi.fn();
    stubFetch({ "/api/applications": () => new Response(null, { status: 401 }) });
    render(<ApplicationsPage user={studentUser} token="jeton-2" onUnauthorized={onUnauthorized} />);
    await waitFor(() => expect(onUnauthorized).toHaveBeenCalled());
  });
});
