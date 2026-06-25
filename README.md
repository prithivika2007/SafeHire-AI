# SafeHire AI 

**AI-Powered Career Re-entry Assistant for Women**  
Built for **SheBuilds Chennai Hack — Code & Challenge 3.0**  
🎯 SDG 5: Gender Equality | Rajalakshmi Engineering College, Chennai

---

## 🌟 What is SafeHire AI?

SafeHire AI is a web platform that helps women confidently return to the workforce after career breaks — whether due to maternity, caregiving, health, or personal reasons. It provides personalized AI-powered guidance, skill roadmaps, resume support, and returnship-ready job opportunities — all in one place.
<<<<<<< HEAD

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
- **AI** — Gemini API (`gemini-2.5-flash`), called directly from the browser
- **Fonts** — Playfair Display, DM Sans, Space Grotesk (Google Fonts)
- **Deployment** — GitHub Pages / Live Server

---

## 🚀 Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/SafeHire-AI.git
cd SafeHire-AI
```

### 2. Add your Gemini API key
Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

In `dashboard.html`, find the line near the top of the `<script>` section:
```js
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
```
and replace it with your own key.

> ⚠️ Note: this is a client-side key for hackathon/demo purposes only. Don't reuse this key elsewhere, since it's visible to anyone viewing the page source.

### 3. How the AI calls work

All AI logic lives inline inside `dashboard.html`. Each of the 9 feature cards calls Gemini directly from the browser:

```js
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function askgemini(prompt, resultId) {
  const el = document.getElementById(resultId);
  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    if (!data.candidates) {
      el.innerHTML = `<div class="result-content" style="color:var(--pink)">⚠️ ${data.error?.message || 'No response from AI'}</div>`;
      return;
    }

    const answer = data.candidates[0].content.parts[0].text;
    el.innerHTML = `<div class="result-content">${answer.replace(/\n/g, '<br/>')}</div>`;

  } catch (err) {
    el.innerHTML = `<div class="result-content" style="color:var(--pink)">⚠️ ${err.message}</div>`;
  }
}
```

Each feature card builds a tailored prompt using the user's profile (name, target role, break duration, etc.) and calls `askgemini(prompt, resultId)` to populate its result section. Calls are spaced out slightly to stay within Gemini's free-tier rate limits.

### 4. Open the app
Open `index.html` with Live Server in VS Code

---

## 📁 Project Structure

```
SafeHire-AI/
├── index.html          # Landing page with flip feature cards
├── onboarding.html     # 4-step user profile form
├── dashboard.html      # AI results + visual score dashboard (Gemini calls live here)
├── style.css           # Full theme, dark mode, animations
├── script.js           # Reference/test file for AI logic experiments
└── README.md
```
