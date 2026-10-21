# VoteChain — High-Level Architecture

## Frontend
- React + Vite + TypeScript
- React Router multi-page navigation
- AppContext for wallet, user session and receipt state
- Services layer for API and browser persistence
- Hooks layer for wallet interactions
- Reusable UI components and admin modules

## Product modules
1. Public marketing / trust layer
2. Election discovery + search + filters
3. Election detail + candidate profiles
4. Multi-step voting workflow
5. Wallet connection abstraction
6. Receipt and verification center
7. Voter dashboard + profile
8. Admin operations console
9. Results and developer documentation

## Backend
- Express REST API
- Election routes
- Voting preparation route
- Receipt lookup
- Admin statistics and audit events
- PostgreSQL/Prisma schema remains the persistence blueprint

## Blockchain
- Solidity election contract starter
- Sepolia configuration placeholders
- Wallet/RPC/contract address environment variables
- Production privacy, governance and security review required before real-world use

## Deployment boundary
The Vite frontend can be deployed to Vercel. The Express API should be deployed separately or converted into Vercel Functions. PostgreSQL and the deployed smart contract are external infrastructure dependencies.
