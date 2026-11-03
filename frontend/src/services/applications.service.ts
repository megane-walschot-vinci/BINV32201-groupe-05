import type { CreatedApplication } from "../models/application.ts";
import { API_URL, readJson } from "../utils/api.ts";
import { isCreatedApplication } from "../utils/guards.ts";

export const createApplication = async (
  token: string,
  offerId: number,
  message: string,
): Promise<CreatedApplication> => {
  const response = await fetch(`${API_URL}/offers/${offerId}/applications`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  return readJson(response, isCreatedApplication, "Candidature impossible");
};
