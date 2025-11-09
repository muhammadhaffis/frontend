# Quick AI Diagram Prompt (Copy-Paste Ready)

## For AI Diagramming Tools (tldraw, Miro AI, Notion AI, etc.)

Create a mind map diagram for "AI Vibe Coder Entry Form" system architecture with these components:

**CENTER:** "AI Vibe Coder Entry Form - System Architecture"

**5 MAIN BRANCHES:**

1. **FRONTEND (Left, Blue)**
   - User Interface: Form with Name, Age, Email fields
   - Validation: Client-side checks
   - API Call: POST request to /submit-data with JSON payload
   - UX: Loading states, success/error messages

2. **API ENDPOINTS (Center, Green)**
   - POST /submit-data: Receives {name, age, email}, returns {status, message}
   - GET /health: Returns {status: "ok"}
   - CORS: Allows Cloudflare Pages + localhost origins
   - Validation: Checks fields, types, age range (1-150)

3. **DATA STORAGE (Right, Orange)**
   - File: submissions.csv in backend/ directory
   - Structure: Columns (name, age, email)
   - Operations: Pandas reads, appends new row, writes CSV
   - Auto-creates file with headers if missing

4. **DATA FLOW (Bottom, Purple - Horizontal)**
   - User Input → Frontend Validation → HTTP POST → API Receives → Server Validation → Data Processing → CSV Storage → Response → Frontend Updates

5. **TECH STACK (Top, Gray)**
   - Frontend: React, TypeScript, Vite, Tailwind
   - Backend: Python, Flask, Flask-CORS, Pandas
   - Deploy: Cloudflare Pages (frontend), PythonAnywhere (backend)

**INCLUDE:**
- Request/Response JSON examples
- Error handling paths
- Color-coded sections
- Arrows showing data flow direction
- HTTP status codes (201, 400, 500)
- CSV file structure example

**LAYOUT:** Hierarchical mind map with center node and 5 branches, showing complete user-to-storage data journey.

