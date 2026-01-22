const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let smashCounter = 0;

const fortunes = ["You will have a great day!", "Something awesome is coming!"];
const jokes = ["Why did the chicken cross the road? To get to the other side!", "I told my computer I needed a break... it said no."];

app.get('/api/fortune', (req, res) => {
  res.json({ fortune: fortunes[Math.floor(Math.random() * fortunes.length)] });
});

app.get('/api/joke', (req, res) => {
  res.json({ joke: jokes[Math.floor(Math.random() * jokes.length)] });
});

app.get('/api/vibe', (req, res) => {
  const mood = req.query.mood || "neutral";
  res.json({ mood: mood, vibe: `Your vibe is ${mood}!` });
});

app.post('/api/smash', (req, res) => {
  smashCounter++;
  res.json({ smashed: smashCounter });
});

app.listen(3000, () => console.log('Server running on port 3000'));
