# Tool-Specific Diagram Prompts

## For tldraw AI

```
Create a system architecture mind map for "AI Vibe Coder Entry Form":

CENTER: "AI Vibe Coder Entry Form System"

BRANCHES:
1. Frontend (React) - Form UI, validation, API calls
2. Backend API (Flask) - /submit-data POST endpoint, /health GET endpoint
3. Data Storage (CSV) - Pandas operations, submissions.csv file
4. Data Flow - User input → Validation → API → CSV → Response
5. Tech Stack - React/TypeScript/Vite (frontend), Python/Flask/Pandas (backend)

Show JSON request/response examples, HTTP status codes, and complete data flow with arrows.
Use color coding: Blue (frontend), Green (API), Orange (storage), Purple (flow).
```

## For Miro AI

```
Design a mind map showing the architecture of "AI Vibe Coder Entry Form":

Central node: System Architecture
5 main branches:
- Frontend Layer (React app with form submission)
- API Layer (Flask endpoints: POST /submit-data, GET /health)
- Storage Layer (CSV file with Pandas)
- Data Flow (complete journey from user input to CSV storage)
- Technology Stack (React/TypeScript/Vite + Python/Flask/Pandas)

Include:
- Request/response JSON structures
- Error handling flows
- CORS configuration
- CSV data structure
- HTTP status codes

Use visual hierarchy and color coding for each layer.
```

## For Notion AI / Whimsical

```
Create a system architecture diagram for "AI Vibe Coder Entry Form":

Structure:
┌─────────────────────────────────────┐
│   AI Vibe Coder Entry Form         │
│        System Architecture         │
└─────────────────────────────────────┘
         │
    ┌────┴────┬──────────┬──────────┐
    │         │          │          │
Frontend    API      Storage    Flow
(React)   (Flask)    (CSV)   (Process)

Details:
- Frontend: Form → Validation → POST /submit-data → Display result
- API: POST /submit-data (201/400/500), GET /health (200)
- Storage: submissions.csv with columns: name, age, email
- Flow: Input → Validate → API → Process → CSV → Response → UI Update

Show JSON examples and error paths.
```

## For Lucidchart / Draw.io AI

```
System Architecture Mind Map:

Title: AI Vibe Coder Entry Form

Central Node: System Architecture

5 Branches:
1. Frontend (React/TypeScript)
   - SubmissionForm component
   - Client validation
   - HTTP POST to /submit-data
   - Success/error handling

2. Backend API (Flask/Python)
   - POST /submit-data endpoint
   - GET /health endpoint
   - CORS configuration
   - Request validation

3. Data Storage (CSV/Pandas)
   - submissions.csv file
   - Read/append operations
   - Auto-initialization

4. Data Flow Sequence
   - User fills form
   - Frontend validates
   - POST request sent
   - API validates
   - Data saved to CSV
   - Response returned
   - UI updated

5. Technology Stack
   - Frontend: React, Vite, Tailwind
   - Backend: Flask, Pandas
   - Deploy: Cloudflare, PythonAnywhere

Include request/response JSON and error scenarios.
```

## For Excalidraw AI

```
Draw a mind map for "AI Vibe Coder Entry Form":

Center: System Architecture

5 branches radiating out:
1. Frontend (blue) - React form, validation, API communication
2. API (green) - Flask endpoints, CORS, validation
3. Storage (orange) - CSV file, Pandas operations
4. Flow (purple) - Complete data journey
5. Stack (gray) - Technologies used

Add:
- JSON request: {"name": "John", "age": 25, "email": "john@example.com"}
- JSON response: {"status": "success", "message": "..."}
- CSV structure: name,age,email
- HTTP codes: 201, 400, 500
- Arrows showing flow direction
```

## For ChatGPT / Claude (Image Generation)

```
Create a detailed mind map diagram showing:

TITLE: "AI Vibe Coder Entry Form - System Architecture"

CENTER NODE: System Architecture

5 MAIN BRANCHES:

1. FRONTEND (Left, Blue)
   - React Submission Form
   - Input fields: Name, Age, Email
   - Client-side validation
   - POST request to API
   - Success/error display

2. API LAYER (Center, Green)
   - Flask server
   - POST /submit-data endpoint
   - GET /health endpoint
   - CORS configuration
   - Request validation
   - Response formatting

3. DATA STORAGE (Right, Orange)
   - CSV file: submissions.csv
   - Pandas library
   - Read/append operations
   - Auto-initialization

4. DATA FLOW (Bottom, Purple)
   - User Input → Validation → API → Processing → CSV → Response → UI

5. TECH STACK (Top, Gray)
   - Frontend: React, TypeScript, Vite
   - Backend: Python, Flask, Pandas

Include JSON examples, HTTP status codes, and color-coded sections.
```

## For Cursor / AI Code Assistants (Mermaid Diagram)

```
Create a Mermaid mind map diagram showing:

- Central node: AI Vibe Coder Entry Form System
- 5 branches: Frontend, API, Storage, Flow, Stack
- Include all endpoints, data structures, and flow paths
- Use different colors for each branch
- Show request/response formats
```

