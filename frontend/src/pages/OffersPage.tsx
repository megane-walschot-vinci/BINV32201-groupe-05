import { useState } from "react";
import EmptyState from "../components/EmptyState.tsx";
import ErrorState from "../components/ErrorState.tsx";
import LoadingState from "../components/LoadingState.tsx";
import OfferTable from "../components/OfferTable.tsx";
import { useOffers } from "../hooks/useOffers.ts";
import { PERIOD_FILTERS, type PeriodFilter } from "../models/offer.ts";
import type { User } from "../models/user.ts";

interface OffersPageProps {
  user: User;
  token: string;
  onUnauthorized: () => void;
}

const DESCRIPTIONS = {
  ADMIN: "Toutes les offres, tous statuts confondus.",
  STUDENT: "Les offres publiées.",
  CONTACT: "Les offres que vous avez déposées.",
} as const;

const OffersPage = ({ user, token, onUnauthorized }: OffersPageProps) => {
  const [period, setPeriod] = useState<PeriodFilter | "">("");
  const [search, setSearch] = useState("");
  const { offers, isLoading, error } = useOffers(
    token,
    onUnauthorized,
    period === "" ? undefined : period,
    search,
  );

  const renderContent = () => {
    if (error) return <ErrorState message={error} />;
    if (isLoading) return <LoadingState />;
    if (offers.length === 0) {
      return (
        <EmptyState
          message={
            search.trim() === ""
              ? "Aucune offre à afficher."
              : "Aucune offre ne correspond à votre recherche."
          }
        />
      );
    }
    return (
      <>
        <p className="result-count">
          {offers.length} offre{offers.length > 1 ? "s" : ""}
        </p>
        <OfferTable
          offers={offers}
          user={user}
          token={token}
          onUnauthorized={onUnauthorized}
        />
      </>
    );
  };

  return (
    <section>
      <h1>Offres de stage</h1>
      <p>{DESCRIPTIONS[user.kind]}</p>
      <label className="period-filter">
        <span>Période</span>
        <select
          aria-label="Filtrer par période"
          value={period}
          onChange={(event) => setPeriod(event.target.value as PeriodFilter | "")}
        >
          <option value="">Toutes les périodes</option>
          {PERIOD_FILTERS.map((periodOption) => (
            <option key={periodOption} value={periodOption}>
              {periodOption}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Rechercher une offre</span>
        <input
          type="search"
          aria-label="Rechercher une offre"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
      {renderContent()}
    </section>
  );
};

export default OffersPage;
