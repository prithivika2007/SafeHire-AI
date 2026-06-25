// script.js — reference/test file for SafeHire AI's core logic
// (Live version of this logic runs inline inside dashboard.html)


const GEMINI_API_KEY = "AQ.Ab8RN6Iy84nGcgwVK4VuXzzyzbepIIltDbiN_1M1wf__aK-qFQ";
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

//Quick test call
askgemini("Explain about AI in a few lines");

