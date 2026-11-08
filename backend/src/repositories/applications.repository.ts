import type { Db } from "../db/database.ts";
import type { ApplicationDbo, ApplicationListDbo } from "../models/application.ts";

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

interface StudentParams {
  studentId: number;
}

interface ApplicationIdParams {
  id: number;
}

interface WithdrawParams {
  id: number;
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
  const findByStudent = db.prepare<StudentParams, ApplicationListDbo>(`
    SELECT a.id, a.offer_id, a.student_id, a.message, a.status, a.applied_at,
           o.title AS offer_title,
           c.short_name AS company_short_name,
           ay.label AS academic_year_label,
           p.code AS period_code
    FROM applications a
    JOIN offers o ON o.id = a.offer_id
    JOIN companies c ON c.id = o.company_id
    JOIN academic_years ay ON ay.id = o.academic_year_id
    JOIN periods p ON p.id = o.period_id
    WHERE a.student_id = @studentId
    ORDER BY a.applied_at DESC, a.id DESC
  `);
  const findById = db.prepare<ApplicationIdParams, ApplicationDbo>(
    `SELECT id, offer_id, student_id, message, status, applied_at
     FROM applications
     WHERE id = @id`,
  );
  const withdraw = db.prepare<WithdrawParams, ApplicationDbo>(`
    UPDATE applications
    SET status = 'WITHDRAWN'
    WHERE id = @id
      AND student_id = @studentId
      AND status = 'IN_PROGRESS'
    RETURNING id, offer_id, student_id, message, status, applied_at
  `);

  return {
    findOfferStatus: (offerId: number): string | undefined =>
      findOfferStatus.get(offerId)?.status,
    hasNonWithdrawn: (offerId: number, studentId: number): boolean =>
      hasNonWithdrawn.get({ offerId, studentId }) !== undefined,
    findByStudent: (studentId: number): ApplicationListDbo[] =>
      findByStudent.all({ studentId }),
    findById: (id: number): ApplicationDbo | undefined => findById.get({ id }),
    withdraw: (id: number, studentId: number): ApplicationDbo | undefined =>
      withdraw.get({ id, studentId }),
    create: (input: ApplicationInsert): ApplicationDbo => insert.get(input)!,
  };
};

export type ApplicationsRepository = ReturnType<typeof createApplicationsRepository>;
