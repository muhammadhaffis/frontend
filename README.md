# Frontend - React + TypeScript + Vite

This is the frontend application for the data submission form. It's built with React, TypeScript, and Vite.

## Features

- Modern React with TypeScript
- Beautiful UI with shadcn/ui components
- Form validation
- Error handling
- Responsive design

## Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:8080`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This frontend is configured to be deployed on Cloudflare Pages. The backend API is deployed separately on PythonAnywhere.

### Environment Variables

You can set the `VITE_API_URL` environment variable to override the default API URL:
```bash
VITE_API_URL=https://your-backend-url.com/submit-data
```

## Backend

The backend API is located in the `backend` directory. See `backend/README.md` for backend setup instructions.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
├── public/             # Static assets
└── dist/              # Build output
```