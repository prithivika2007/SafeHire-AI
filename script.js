// script.js — placeholder for teammate
// All AI logic is currently inline in dashboard.html
// Teammate can refactor API calls into this file

// Example structure for teammate:
async function callClaudeAPI(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await response.json();
  return data.content?.find(b => b.type === 'text')?.text || '';
}