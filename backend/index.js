/**
 * VibeCheck API (CPE 411L)
 *
 * This server:
 * - runs on your computer (localhost)
 * - listens on a port (default: 3000)
 * - responds to browser requests (endpoints) using JSON
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORS lets your frontend page call your backend API.
app.use(cors());

// This allows Express to read JSON bodies (used for POST requests).
app.use(express.json());

// Data pools (random picks). You can customize these.
const fortunes = [
  "manifesting mabilis ang data sa 2nd floor coe2",
  "ang next commit mo ay goods.",
  "ohhg no wala kang fortune.",
  "your fortune is wow ganda fortune cookie random words go brrr",
];

const jokes = [
  "haha eto joke",
  "whats the difference of a catholic priest and a pimple? hulaan mo",
  "my whole life is a joke",
];

const vibeMap = {
  happy: { emoji: "😄", message: "Keep going gagraduate ka rin!" },
  tired: { emoji: "🥱", message: "commit, nagkamali, refresh, save, commit, push" },
  stressed: { emoji: "😵‍💫", message: "vibe ko ngayon ay mainit ang ulo dahil sa data sa 2nd floor coe 2" },
};

// Smash counter (stored in memory for now)
let smashes = 0;

// GET /api/fortune -> returns one random fortune
app.get("/api/fortune", (req, res) => {
  const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: pick });
});

// GET /api/joke -> returns one random joke
app.get("/api/joke", (req, res) => {
  const pick = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: pick });
});

// GET /api/vibe?mood=happy|tired|stressed
app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood];

  if (!vibe) {
    return res.json({
      mood: mood || "unknown",
      emoji: "🤔",
      message: "Try mood=happy, tired, or stressed.",
    });
  }

  res.json({ mood, ...vibe });
});

// POST /api/smash -> increases counter and returns the updated value
app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smashes -> returns current counter
app.get("/api/smashes", (req, res) => {
  res.json({ smashes });
});

// GET /api/secret?code=411L -> hidden message if code is correct
app.get("/api/secret", (req, res) => {
  const code = req.query.code;

  if (code === "411L") {
    return res.json({ message: "🎉 Secret unlocked: MAGKAKATRABAHO KA!" });
  }

  res.status(403).json({ message: "Nope 😄 Try code=411L" });
});

// Start server
app.listen(PORT, () => {
  console.log(`VibeCheck API running at http://localhost:${PORT}`);
});