# Gesta repository guidelines

## Build, test, and lint

Run commands from the repository root. The project requires Node.js `>=22.14.0` and
uses npm workspaces.

```bash
npm ci
npm run setup                 # first run: creates backend/.env and initializes SQLite
npm run dev                   # API :3000 and Vite UI :5173
npm run check                 # lint, typecheck, tests, then build
npm run lint
npm run typecheck
npm test
npm run build
npm run db:init
npm run db:reset              # stop the dev server first
```

Run one test file or one test case without running the whole workspace:

```bash
npm exec vitest run backend/tests/offers.test.ts
npm exec vitest run frontend/tests/OffersPage.test.tsx
npm exec vitest run backend/tests/offers.test.ts -t "returns published offers"
```

The backend and frontend also expose their own `lint`, `typecheck`, `test`, and `build`
scripts; use `npm run <script> -w backend` or `npm run <script> -w frontend` when only
one workspace is relevant. Backend tests use Vitest/Supertest with an in-memory SQLite
database. Frontend tests use Vitest, jsdom, and Testing Library.

## Architecture

Gesta is a React/Vite frontend backed by an Express/TypeScript API and a local SQLite
database. Vite serves the UI on port 5173 and proxies `/api/...` to the API on port
3000, removing `/api` from the forwarded path.

The backend is assembled through factories in `backend/src/app.ts`:

```text
HTTP request
  -> middleware (authentication/authorization)
  -> controller (HTTP validation and response)
  -> service (business rules)
  -> repository (SQL)
  -> SQLite
```

Repositories return database row types, mappers convert between database rows, domain
objects, and API DTOs, and services must not depend on Express `Request` or `Response`.
Named permission predicates in `backend/src/services/permissions.ts` are shared by
authorization middleware and business logic. Unexpected or invalid business/API input
should be reported with `HttpError`; `errorHandler` converts it to the standard
`{ "error": { "code", "message" } }` response.

The frontend follows the course's MVVM-style separation:

```text
pages -> hooks -> services/utils -> models
  \-> reusable components
```

`App.tsx` is the single owner of `useAuth`; it passes the token, user, logout, and
unauthorized callback down to pages. Services perform HTTP calls and validate JSON with
type guards. Hooks own loading/error state and abort in-flight requests on cleanup.

Read [docs/architecture.md](../docs/architecture.md) for the complete layer map and
cross-layer examples, and [backend/API.md](../backend/API.md) for route contracts.

## Repository conventions

- Use explicit `.ts`/`.tsx` extensions in relative backend imports. TypeScript rewrites
  them to `.js` during the NodeNext build.
- Send the session token directly in `Authorization`; this project does not use the
  `Bearer` prefix. Authentication reloads the user, roles, and companies from the
  database on every request.
- Keep authorization in the backend. Frontend route visibility is only a UX concern;
  protected API routes still authenticate and enforce permissions server-side.
- Keep API status/error behavior consistent with `backend/API.md`: controllers validate
  query/body input, services enforce business rules, and `HttpError` supplies the
  status, stable code, and French message.
- Add schema changes as a new ordered SQL migration in
  `backend/src/db/migrations/` (for example `002_...sql`); never edit an applied
  migration. SQLite constraints handle structural invariants, while services handle
  permissions and state-transition rules.
- Store status/role/period codes in their English database/API forms; translate them
  for display in the frontend. Keep seed identifiers in
  `backend/src/db/seed/seedIds.ts` stable so tests and demonstrations remain readable.
- Backend composition and tests use factory functions such as
  `createOffersRepository(db)` and `createTestApp()`. Reuse the in-memory test helpers
  rather than opening `backend/data/gesta.db` from tests.
- Frontend API services should use `readJson` plus a model-specific type guard. Treat
  HTTP 401 through the hook's `onUnauthorized` path so the session returns to login;
  support `AbortSignal` for requests that can be superseded.
- Keep the API documentation and REST Client examples in sync with route changes. For
  schema or feature work, also follow the repository pull-request checklist in
  [.github/pull_request_template.md](./pull_request_template.md).

## Project documentation

- [README.md](../README.md): setup, commands, current scope, and demo-mode constraints.
- [docs/architecture.md](../docs/architecture.md): detailed architecture and reference
  flows.
- [docs/seed.md](../docs/seed.md): fictitious users, companies, offers, and stable test
  scenarios.
- [backend/API.md](../backend/API.md): API authentication, response formats, and routes.
