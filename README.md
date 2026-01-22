# vibecheck-custodiobatongbakal # VibeCheck API + Frontend UI (CPE 411L Activity 3) This project is a small Node.js + Express backend API with a simple frontend UI that interacts with it. It demonstrates API routes, JSON responses, a counter endpoint, and button interactions on a web page. --- ## Project Structure VibeCheck-<yourname>/ ├─ backend/ │ ├─ index.js │ └─ package.json ├─ frontend/ │ ├─ index.html │ └─ app.js └─ README.md --- ## Backend Setup 1. Open terminal in backend/ 2. Initialize npm and install dependencies:
bash
npm init -y
npm install express cors

Start the server:

node index.js


Expected output:

VibeCheck API running at http://localhost:3000

Backend API Endpoints

GET /api/fortune
Returns a random fortune. Example:

{ "fortune": "You will debug it in 5 minutes... after 55 minutes of panic." }


GET /api/joke
Returns a random joke. Example:

{ "joke": "Why did the developer go broke? Because they used up all their cache." }


GET /api/vibe?mood=happy|tired|stressed
Returns mood emoji and message. Example:

{ "mood": "happy", "emoji": "😄", "message": "Keep going - you're shipping greatness!" }


POST /api/smash
Increments counter and returns current smashes. Example:

{ "smashes": 1 }


GET /api/smashes
Returns current smash counter. Example:

{ "smashes": 1 }


GET /api/secret?code=411L
Returns hidden message if code is correct. Example:

{ "message": "🎉 Secret unlocked: +10 luck on your next merge!" }

Frontend Setup

Open frontend/index.html in a browser.

Make sure backend is running.

Click buttons to fetch API results:

Fortune 🔮

Joke 😂

Mood 😄 🥱 😵‍💫

Smash 💥

Secret 🕵️

Output appears in the <pre> area on the page.

GitHub Workflow

Feature branches:

feature/api-routes

feature/smash-counter

feature/frontend-ui

Commits:

At least 2 commits per feature branch with meaningful messages

Pull Requests:

Open PR from feature branch → main

Partner review & comment

Merge after review

Notes

Backend uses Node.js, Express, and CORS.

Frontend uses HTML + JS (fetch API).

Smash counter is stored in memory (resets when server restarts).


---

After pasting, you can save the file in VS Code (`Ctrl+S`), then run:
bash git add README.md git commit -m "Add README with run steps and API endpoints" git push origin main