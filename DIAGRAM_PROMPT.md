# AI Diagram Generation Prompt: AI Vibe Coder Entry Form System Architecture

## Instructions for AI Diagramming Tool

Create a comprehensive mind map/diagram showing the complete system architecture and data flow for the "AI Vibe Coder Entry Form" application. Use a clear, hierarchical structure with color-coded sections.

---

## Diagram Structure

### CENTER NODE (Main Title)
**"AI Vibe Coder Entry Form - System Architecture"**
- Place this in the center of the diagram
- Use a large, bold font
- Color: Dark blue (#1e40af)

---

## BRANCH 1: Frontend Layer (Left Side)
**Title: "Frontend - React Application"**
- Color: Light blue (#3b82f6)

### Sub-nodes:
1. **"User Interface"**
   - Components:
     - Submission Form Component
     - Input Fields: Name, Age, Email
     - Submit Button
     - Success/Error Messages

2. **"Form Validation"**
   - Client-side validation
   - Email format check
   - Required fields check
   - Age range validation (1-150)

3. **"API Communication"**
   - HTTP POST request to `/submit-data`
   - JSON payload: `{name, age, email}`
   - Environment variable: `VITE_API_URL`
   - Error handling

4. **"User Experience"**
   - Loading states
   - Success feedback
   - Error messages
   - Form reset after submission

---

## BRANCH 2: API Layer (Center)
**Title: "Backend API - Flask Server"**
- Color: Green (#10b981)

### Sub-nodes:

1. **"API Endpoints"**
   
   **Endpoint 1: POST /submit-data**
   - Method: POST
   - Content-Type: application/json
   - Request Body:
     ```json
     {
       "name": "string",
       "age": integer,
       "email": "string"
     }
     ```
   - Success Response (201):
     ```json
     {
       "status": "success",
       "message": "Submission successfully received."
     }
     ```
   - Error Response (400):
     ```json
     {
       "status": "error",
       "message": "Invalid data format or missing fields."
     }
     ```
   - Error Response (500):
     ```json
     {
       "status": "error",
       "message": "Failed to process submission. Please try again."
     }
     ```

   **Endpoint 2: GET /health**
   - Method: GET
   - Response (200):
     ```json
     {
       "status": "ok"
     }
     ```

2. **"CORS Configuration"**
   - Allowed origins:
     - Cloudflare Pages URL
     - localhost:8080, localhost:5173, localhost:3000
   - Methods: POST, GET, OPTIONS
   - Headers: Content-Type

3. **"Request Processing"**
   - JSON validation
   - Field validation
   - Data sanitization (trim whitespace)
   - Type conversion (age to integer)

4. **"Error Handling"**
   - Invalid JSON handling
   - Missing fields detection
   - Type validation
   - Server error handling

---

## BRANCH 3: Data Storage Layer (Right Side)
**Title: "Data Storage - CSV File"**
- Color: Orange (#f59e0b)

### Sub-nodes:

1. **"File Management"**
   - File name: `submissions.csv`
   - Location: `backend/submissions.csv`
   - Auto-initialization if missing

2. **"Data Structure"**
   - Columns: name, age, email
   - Format: CSV (Comma-Separated Values)
   - Headers row included

3. **"Data Operations"**
   - Read existing data (Pandas)
   - Append new row
   - Write to file
   - Error handling for file operations

4. **"Data Flow"**
   - New submission → DataFrame → CSV append
   - No index in CSV output
   - Preserves existing data

---

## BRANCH 4: Data Flow (Bottom, Horizontal Flow)
**Title: "Complete Data Flow"**
- Color: Purple (#8b5cf6)
- Show as a horizontal sequence with arrows

### Flow Steps (Left to Right):

1. **"User Input"**
   - User fills form fields
   - Name, Age, Email entered

2. **"Frontend Validation"**
   - Client-side checks
   - Format validation

3. **"HTTP Request"**
   - POST request sent
   - JSON payload created
   - Headers set

4. **"API Receives"**
   - Flask receives request
   - CORS check
   - JSON parsing

5. **"Server Validation"**
   - Field presence check
   - Type validation
   - Business rules (age range)

6. **"Data Processing"**
   - Data sanitization
   - Type conversion
   - CSV initialization (if needed)

7. **"CSV Storage"**
   - Read existing CSV
   - Append new row
   - Write to file

8. **"Response Sent"**
   - Success/Error response
   - JSON format
   - HTTP status code

9. **"Frontend Updates"**
   - Display success message
   - Show error if failed
   - Reset form on success

---

## BRANCH 5: Technology Stack (Top)
**Title: "Technology Stack"**
- Color: Gray (#6b7280)

### Sub-nodes:

1. **"Frontend Technologies"**
   - React (UI framework)
   - TypeScript (Language)
   - Vite (Build tool)
   - Tailwind CSS (Styling)
   - shadcn-ui (Components)

2. **"Backend Technologies"**
   - Python (Language)
   - Flask (Web framework)
   - Flask-CORS (CORS handling)
   - Pandas (Data processing)

3. **"Deployment"**
   - Frontend: Cloudflare Pages
   - Backend: PythonAnywhere
   - Environment variables for configuration

---

## Visual Requirements

### Color Scheme:
- Frontend: Light blue tones
- API: Green tones
- Storage: Orange tones
- Flow: Purple tones
- Stack: Gray tones

### Arrows and Connections:
- Use solid arrows for data flow
- Use dashed arrows for dependencies
- Label all connections clearly
- Show request/response directions

### Layout:
- Center: Main title
- Left: Frontend layer
- Center-left: API layer
- Right: Storage layer
- Bottom: Data flow (horizontal)
- Top: Technology stack

### Additional Elements:
- Add small icons for:
  - Database/Storage icon for CSV
  - Server icon for API
  - Browser icon for Frontend
  - Arrow icons for data flow

### Text Formatting:
- Use bold for titles
- Use code font for JSON examples
- Use different font sizes for hierarchy
- Keep text readable (minimum 12pt)

---

## Specific Details to Include

1. **Request Example:**
   ```
   POST /submit-data
   Headers: Content-Type: application/json
   Body: {"name": "John Doe", "age": 25, "email": "john@example.com"}
   ```

2. **Response Example:**
   ```
   Status: 201 Created
   Body: {"status": "success", "message": "Submission successfully received."}
   ```

3. **CSV Structure:**
   ```
   name,age,email
   John Doe,25,john@example.com
   Jane Smith,30,jane@example.com
   ```

4. **Error Scenarios:**
   - Missing fields → 400 Bad Request
   - Invalid age → 400 Bad Request
   - Server error → 500 Internal Server Error
   - Network error → Frontend error message

---

## Final Instructions

Create a mind map that:
- Is visually clear and easy to follow
- Shows all connections between components
- Includes actual code/JSON examples where relevant
- Uses consistent color coding
- Has a logical flow from top to bottom or left to right
- Can be exported as PNG, PDF, or SVG
- Is suitable for documentation or presentation

Make sure the diagram tells the complete story of how data flows from user input through the system to final storage, including all validation steps and error handling paths.

