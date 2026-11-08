import type { Application, CreatedApplication } from "../models/application.ts";
import { API_URL, readJson } from "../utils/api.ts";
import { isApplicationList, isCreatedApplication } from "../utils/guards.ts";

export const getMyApplications = async (
  token: string,
  signal?: AbortSignal,
): Promise<Application[]> => {
  const response = await fetch(`${API_URL}/applications`, {
    headers: { Authorization: token },
    signal,
  });
  return readJson(response, isApplicationList, "Chargement des candidatures impossible");
};

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
