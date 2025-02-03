import { updateUI } from './updateUI';

const analyzeEmotion = async (event) => {
    event.preventDefault();

    let text = document.getElementById('article-text').value;
    if (!text) {
        alert('Please enter text to analyze.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to fetch data. Make sure the server is running.");
    }
};

export { analyzeEmotion };
