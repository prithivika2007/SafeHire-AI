const GEMINI_API_KEY = "AQ.Ab8RN6JLEJ0d-6lltarRD9rWwnQhwWdzeFGOwCHbNW6tsO8T8A";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function askgemini() {
    

const response = await fetch(GEMINI_URL, 
    {   
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(
            {
                contents:[{
                    parts: [{
                        text: "Who is ram charan"
                    }]
                }]
            }
        )
    }

);

const data= await response.json();
const answer = data.candidates[0].content.parts[0].text;
console.log(answer);
}


askgemini();
