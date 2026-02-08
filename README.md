# VibeCheck-CustodioBatongBakal
## VibeCheck API + Frontend UI (CPE 411L Activity 3)

This project is a small Node.js + Express backend API with a simple frontend UI that interacts with it. It demonstrates API routes, JSON responses, a counter endpoint, and button interactions on a web page.

---

## Project Structure
VibeCheck-<yourname>/
├─ backend/
│ ├─ index.js
│ └─ package.json
├─ frontend/
│ ├─ index.html
│ └─ app.js
└─ README.md


---

## Backend Setup

1. Open terminal in `backend/`
2. Initialize npm and install dependencies:

```bash
npm init -y
npm install express cors
```
3. Start the server:

```bash
node index.js
```
Expected output:
```bash

VibeCheck API running at http://localhost:3000
```
Backend API Endpoints

GET /api/fortune
Returns a random fortune. Example:
```bash
{ "fortune": "ang next commit mo ay goods" }
```
GET /api/joke
Returns a random joke. Example:
```bash
{ "joke": "haha eto joke." }
```
GET /api/vibe?mood=happy|tired|stressed
Returns mood emoji and message. Example:
```bash
tired: { emoji: "🥱", message: "commit, nagkamali, refresh, save, commit, push" }
```
POST /api/smash
Increments counter and returns current smashes. Example:
```bash
{ "smashes": 1 }
```
GET /api/smashes
Returns current smash counter. Example:
```bash
{ "smashes": 1 }
```

GET /api/secret?code=411L
Returns hidden message if code is correct. Example:
```bash
{ message: "🎉 Secret unlocked: MAGKAKATRABAHO KA!" }
```
Frontend Setup
1. Open frontend/index.html in a browser.
2. Make sure backend is running.
3. Click buttons to fetch API results:
    - Fortune 🔮
    - Joke 😂
    - Mood 😄 🥱 😵‍💫
    - Smash 💥
    - Secret 🕵️

Output appears in the pre-area on the page.

---
GitHub Workflow
Feature branches
    - feature/api-routes
    - feature/smash-counter
    - feature/frontend-ui

Commits
    - At least 2 commits per feature branch with    meaningful messages

Pull Requests
    - Open PR from feature branch → main
    - Partner review & comment
    - Merge after review

Notes
    - Backend uses Node.js, Express, and CORS.
    - Frontend uses HTML + JS (fetch API).
    - Smash counter is stored in memory (resets when server restarts).


---

After pasting this into **README.md**, save the file (`Ctrl+S`), then run:

```bash
git add README.md
git commit -m "Add README with run steps and API endpoints"
git push origin <your-branch-name>  
