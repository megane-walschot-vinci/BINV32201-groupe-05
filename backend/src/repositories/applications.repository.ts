import type { Db } from "../db/database.ts";
import type { ApplicationDbo } from "../models/application.ts";

interface OfferStatusRow {
  status: string;
}

interface ApplicationInsert {
  offerId: number;
  studentId: number;
  message: string | null;
}

interface ApplicationExistsParams {
  offerId: number;
  studentId: number;
}

export const createApplicationsRepository = (db: Db) => {
  const findOfferStatus = db.prepare<[number], OfferStatusRow>(
    "SELECT status FROM offers WHERE id = ?",
  );
  const insert = db.prepare<ApplicationInsert, ApplicationDbo>(`
    INSERT INTO applications (offer_id, student_id, message)
    VALUES (@offerId, @studentId, @message)
    RETURNING id, offer_id, student_id, message, status, applied_at
  `);
  const hasNonWithdrawn = db.prepare<ApplicationExistsParams, { found: number }>(`
    SELECT 1 AS found
    FROM applications
    WHERE offer_id = @offerId
      AND student_id = @studentId
      AND status <> 'WITHDRAWN'
    LIMIT 1
  `);

  return {
    findOfferStatus: (offerId: number): string | undefined =>
      findOfferStatus.get(offerId)?.status,
    hasNonWithdrawn: (offerId: number, studentId: number): boolean =>
      hasNonWithdrawn.get({ offerId, studentId }) !== undefined,
    create: (input: ApplicationInsert): ApplicationDbo => insert.get(input)!,
  };
};

export type ApplicationsRepository = ReturnType<typeof createApplicationsRepository>;
