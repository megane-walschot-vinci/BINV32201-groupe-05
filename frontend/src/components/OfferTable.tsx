import type { Offer } from "../models/offer.ts";
import type { User } from "../models/user.ts";
import { OFFER_STATUS_LABELS, OFFER_STATUS_TONES, PERIOD_LABELS } from "../utils/labels.ts";
import StatusBadge from "./StatusBadge.tsx";
import { useState } from "react";
import { createApplication } from "../services/applications.service.ts";
import { isUnauthorized } from "../utils/api.ts";

interface OfferTableProps {
  offers: Offer[];
  user: User;
  token: string;
  onUnauthorized: () => void;
}

const OfferTable = ({ offers, user, token, onUnauthorized }: OfferTableProps) => {
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitApplication = async (offerId: number) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createApplication(token, offerId, message);
      setSuccess(offerId);
      setSelectedOfferId(null);
      setMessage("");
    } catch (reason: unknown) {
      if (isUnauthorized(reason)) onUnauthorized();
      else setError(reason instanceof Error ? reason.message : "Candidature impossible");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="table-wrapper">
      {error && <p role="alert">{error}</p>}
      <table className="data-table">
      <thead>
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Entreprise</th>
          <th scope="col">Année</th>
          <th scope="col">Période</th>
          <th scope="col">Statut</th>
          {user.kind === "STUDENT" && <th scope="col">Action</th>}
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.id}>
            <td>{offer.title}</td>
            <td>{offer.companyShortName}</td>
            <td>{offer.academicYear}</td>
            <td>{PERIOD_LABELS[offer.period]}</td>
            <td>
              <StatusBadge
                label={OFFER_STATUS_LABELS[offer.status]}
                tone={OFFER_STATUS_TONES[offer.status]}
              />
            </td>
            {user.kind === "STUDENT" && (
              <td>
                {success === offer.id ? (
                  <span>Candidature envoyée</span>
                ) : selectedOfferId === offer.id ? (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      void submitApplication(offer.id);
                    }}
                  >
                    <label>
                      <span>Message (facultatif)</span>
                      <textarea
                        aria-label={`Message pour ${offer.title}`}
                        value={message}
                        maxLength={2000}
                        onChange={(event) => setMessage(event.target.value)}
                      />
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                      Envoyer
                    </button>
                    <button type="button" onClick={() => setSelectedOfferId(null)}>
                      Annuler
                    </button>
                  </form>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedOfferId(offer.id);
                      setSuccess(null);
                      setError(null);
                    }}
                  >
                    Candidater
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default OfferTable;
