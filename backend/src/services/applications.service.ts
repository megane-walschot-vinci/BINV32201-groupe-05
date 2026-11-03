import { toApplication } from "../mappers/application.mapper.ts";
import type { Application } from "../models/application.ts";
import type { ApplicationsRepository } from "../repositories/applications.repository.ts";
import type { User } from "../models/user.ts";
import { HttpError } from "../utils/httpError.ts";
import { isStudent } from "./permissions.ts";

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isInteger(value) && value > 0;

const isUniqueConstraintError = (error: unknown): boolean =>
  error instanceof Error &&
  "code" in error &&
  (error as { code?: unknown }).code === "SQLITE_CONSTRAINT_UNIQUE";

export const createApplicationsService = (repository: ApplicationsRepository) => ({
  apply: (viewer: User, offerId: number, message: string | null): Application => {
    if (!isStudent(viewer)) {
      throw new HttpError(403, "FORBIDDEN", "Seuls les étudiants peuvent candidater");
    }
    if (!isPositiveInteger(viewer.id)) {
      throw new HttpError(401, "UNAUTHENTICATED", "Session absente, expirée ou invalide");
    }
    if (repository.hasNonWithdrawn(offerId, viewer.id)) {
      throw new HttpError(409, "APPLICATION_EXISTS", "Vous avez déjà candidaté à cette offre");
    }
    const offerStatus = repository.findOfferStatus(offerId);
    if (offerStatus === undefined) {
      throw new HttpError(404, "NOT_FOUND", "Offre introuvable");
    }
    if (offerStatus !== "PUBLISHED") {
      throw new HttpError(400, "INVALID_STATE", "L'offre n'est pas publiée");
    }
    try {
      return toApplication(repository.create({ offerId, studentId: viewer.id, message }));
    } catch (error) {
      if (isUniqueConstraintError(error)) {
        throw new HttpError(409, "APPLICATION_EXISTS", "Vous avez déjà candidaté à cette offre");
      }
      throw error;
    }
  },
});

export type ApplicationsService = ReturnType<typeof createApplicationsService>;
