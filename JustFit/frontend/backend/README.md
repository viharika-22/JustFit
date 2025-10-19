# Backend — JustFit (skeleton)

## Run (dev)
cp .env.example .env
npm install
npm run dev
# server will run at http://localhost:4000

## Routes
GET /health  -> { status: 'ok', time: '...' }

## DB
- Quick local dev: SQLite (see README instructions)
- Postgres: point DATABASE_URL to your DB, or run Postgres in Docker:
  docker run -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:15

## Create PR
- Create a branch, commit and push, then open a PR (see project root instructions).
