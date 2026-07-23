# Nakshatra

AI-powered Vedic Astrology web application.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Tailwind CSS, React Router |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Auth | JWT |

## Project Structure

```
nakshatra/
├── frontend/          # React SPA
├── backend/           # Express REST API
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your PostgreSQL credentials and JWT secret
npm install
npm run db:migrate
npm run dev
```

API runs at `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

App runs at `http://localhost:5173`

## Architecture

### Backend (Layered)

```
Routes → Controllers → Services → Models → Database
```

### Frontend (Feature-oriented)

```
Pages → Components → Services (API) → Contexts/Hooks
```

## Environment Variables

See `backend/.env.example` and `frontend/.env.example` for required configuration.

## License

ISC
