# SafeHire AI 

**AI-Powered Career Re-entry Assistant for Women**  
Built for **SheBuilds Chennai Hack — Code & Challenge 3.0**  
🎯 SDG 5: Gender Equality | Rajalakshmi Engineering College, Chennai

---

## 🌟 What is SafeHire AI?

SafeHire AI is a web platform that helps women confidently return to the workforce after career breaks — whether due to maternity, caregiving, health, or personal reasons. It provides personalized AI-powered guidance, skill roadmaps, resume support, and returnship-ready job opportunities — all in one place.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 Resume Gap Analyzer | Identifies skill gaps and rewrites career break narrative positively |
| 🗺️ Personalized Career Roadmap | Step-by-step milestones based on break duration and target role |
| 💼 Returnship Finder | Curated companies with active returnship programs |
| 🎤 AI Interview Coach | Practice rounds with feedback and confidence scoring |
| 📊 Confidence Booster Dashboard | Visual progress tracking with animated score rings |
| 🤝 Community & Mentorship | Connects women with mentors, coaches, and peer returners |
| 🧠 Emotional Readiness Check ⭐ | Detects imposter syndrome patterns and serves targeted support |
| ⏱️ Break Duration Intelligence ⭐ | Dynamically adjusts all advice based on exact break length |
| 🛠️ AI Skill Sandbox Simulator ⭐ | Modernizes older skills to match 2026 industry standards |

⭐ = Unique to SafeHire AI — not found in existing platforms

---

## 🎨 UI Highlights

- Blue + pink gradient theme with elegant typography
- Dark / Light mode toggle (persists across pages)
- Animated circular score rings (Skill Readiness, Resume Strength, Interview Confidence)
- Skill breakdown bars — current skills vs skills to learn
- Flip cards on landing page for feature previews
- 4-step multi-step onboarding form with resume upload
- Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend** — Pure HTML, CSS, JavaScript (no framework)
- **AI** — Claude API (`claude-sonnet-4-6`) via Express proxy server
- **Fonts** — Playfair Display, DM Sans, Space Grotesk (Google Fonts)
- **Deployment** — GitHub Pages / Live Server

---

## 🚀 Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/SafeHire-AI.git
cd SafeHire-AI
```

### 2. Set up the proxy server (teammate's part)
```bash
npm init -y
npm install express cors node-fetch
```

Create `server.js`:
```js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());
app.use(require('cors')());

app.post('/api/claude', async (req, res) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'YOUR_CLAUDE_API_KEY',
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));
```

### 3. Run the proxy
```bash
node server.js
```

### 4. Open the app
Open `index.html` with Live Server in VS Code

---

## 📁 Project Structure

```
SafeHire-AI/
├── index.html          # Landing page with flip feature cards
├── onboarding.html     # 4-step user profile form
├── dashboard.html      # AI results + visual score dashboard
├── style.css           # Full theme, dark mode, animations
├── script.js           # Placeholder for AI logic refactor
└── README.md
```

---

