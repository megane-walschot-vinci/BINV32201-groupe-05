CREATE UNIQUE INDEX applications_student_offer_not_withdrawn
  ON applications (student_id, offer_id)
  WHERE status <> 'WITHDRAWN';
