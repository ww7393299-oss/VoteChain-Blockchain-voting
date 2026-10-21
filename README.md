# VoteChain 2.0 — High-Level Full-Stack Demo

VoteChain is a premium, dark Web3 voting platform concept built as an educational demonstration. This version adds a stronger product architecture and functional demo modules instead of being only a collection of screens.

## Included

### Frontend
- React + Vite + TypeScript
- Responsive high-end dark Web3/security UI
- Public landing, elections, details, voting and results
- Multi-step voting flow
- Wallet connection abstraction with safe demo mode
- Persistent demo wallet + voter session using localStorage
- Receipt history and profile center
- Transaction verification center
- Admin operations console
- Reusable modal, wallet, stat and admin components
- 404 route

### Backend
- Express REST API
- `/api/health`
- `/api/elections`
- `/api/elections/:id`
- `/api/voting/prepare`
- `/api/voting/receipt/:hash`
- `/api/admin/stats`
- `/api/admin/audit`
- In-memory demo audit/vote service

### Data / blockchain foundation
- PostgreSQL + Prisma schema blueprint
- Solidity election contract starter
- Environment variable template
- Architecture documentation

## Run frontend

```bash
npm install
npm run dev
```

## Run API

```bash
npm run server
```

API starts on `http://localhost:4000`.

## Build

```bash
npm run build
```

## Demo admin

Open `/login` and use any email containing `admin`, for example `admin@votechain.local`. This grants the demo `ADMIN` role and exposes `/admin`.

## Important production boundary

The UI and API are functional demonstration modules, but they do not constitute a certified voting system. Real deployment requires a production database, migrations, secure authentication, real wallet signing, contract deployment, privacy-preserving ballot design, key management, monitoring, threat modeling, independent smart-contract/security review and legal/election governance review.

The Vite frontend is Vercel-ready. The Express API remains a separate service unless it is converted to Vercel Functions. PostgreSQL and the deployed blockchain contract remain external dependencies.
