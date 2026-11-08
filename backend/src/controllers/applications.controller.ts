import { Router } from "express";
import { getCurrentUser } from "../middlewares/authenticate.ts";
import type { ApplicationsService } from "../services/applications.service.ts";
import { HttpError } from "../utils/httpError.ts";
import { toApplicationDto } from "../mappers/application.mapper.ts";

const parseOfferId = (value: string): number => {
  const offerId = Number(value);
  if (!Number.isInteger(offerId) || offerId <= 0) {
    throw new HttpError(400, "INVALID_QUERY", "L'identifiant de l'offre est invalide");
  }
  return offerId;
};

const parseMessage = (body: unknown): string | null => {
  if (body === undefined || body === null) return null;
  if (typeof body !== "object" || body === null) {
    throw new HttpError(400, "INVALID_BODY", "Le corps doit contenir un message facultatif");
  }
  const message = (body as { message?: unknown }).message;
  if (message === undefined || message === null || message === "") return null;
  if (typeof message !== "string" || message.length > 2000 || message.trim() === "") {
    throw new HttpError(400, "INVALID_BODY", "Le message doit être un texte de 2000 caractères maximum");
  }
  return message.trim();
};

export const createApplicationsRouter = (service: ApplicationsService) => {
  const router = Router();

  router.post("/:offerId/applications", (req, res) => {
    const application = service.apply(
      getCurrentUser(req),
      parseOfferId(req.params.offerId),
      parseMessage(req.body),
    );
    res.status(201).json(toApplicationDto(application));
  });

  return router;
};
