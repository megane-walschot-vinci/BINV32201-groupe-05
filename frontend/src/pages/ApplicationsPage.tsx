import { useState } from "react";
import EmptyState from "../components/EmptyState.tsx";
import ErrorState from "../components/ErrorState.tsx";
import LoadingState from "../components/LoadingState.tsx";
import StatusBadge from "../components/StatusBadge.tsx";
import { useApplications } from "../hooks/useApplications.ts";
import { withdrawApplication } from "../services/applications.service.ts";
import { isUnauthorized } from "../utils/api.ts";
import type { User } from "../models/user.ts";
import {
  APPLICATION_STATUS_LABELS,
  APPLICATION_STATUS_TONES,
  PERIOD_LABELS,
} from "../utils/labels.ts";

interface ApplicationsPageProps {
  user: User;
  token: string;
  onUnauthorized: () => void;
}

const ApplicationsPage = ({ user, token, onUnauthorized }: ApplicationsPageProps) => {
  const { applications, isLoading, error, reload } = useApplications(token, onUnauthorized);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isWithdrawing, setIsWithdrawing] = useState<number | null>(null);

  const handleWithdraw = async (applicationId: number) => {
    if (!window.confirm("Retirer cette candidature ?")) return;
    setActionError(null);
    setIsWithdrawing(applicationId);
    try {
      await withdrawApplication(token, applicationId);
      reload();
    } catch (reason: unknown) {
      if (isUnauthorized(reason)) onUnauthorized();
      else setActionError(reason instanceof Error ? reason.message : "Retrait impossible");
    } finally {
      setIsWithdrawing(null);
    }
  };

  if (error) return <ErrorState message={error} />;
  if (isLoading) return <LoadingState />;

  return (
    <section>
      <h1>Mes candidatures</h1>
      <p>Les candidatures de {user.firstName}.</p>
      {actionError && <ErrorState message={actionError} />}
      {applications.length === 0 ? (
        <EmptyState message="Aucune candidature à afficher." />
      ) : (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Offre</th>
                <th scope="col">Entreprise</th>
                <th scope="col">Année</th>
                <th scope="col">Période</th>
                <th scope="col">Statut</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.offerTitle}</td>
                  <td>{application.companyShortName}</td>
                  <td>{application.academicYear}</td>
                  <td>{PERIOD_LABELS[application.period]}</td>
                  <td>
                    <StatusBadge
                      label={APPLICATION_STATUS_LABELS[application.status]}
                      tone={APPLICATION_STATUS_TONES[application.status]}
                    />
                  </td>
                  <td>
                    {application.status === "IN_PROGRESS" && (
                      <button
                        type="button"
                        disabled={isWithdrawing === application.id}
                        onClick={() => void handleWithdraw(application.id)}
                      >
                        Retirer
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ApplicationsPage;
