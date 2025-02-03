const updateUI = (data) => {
    if (data.error) {
        document.getElementById('results').innerText = `Error: ${data.error}`;
        return;
    }

    document.getElementById('polarity').innerText = `Sentiment: ${data.polarity}`;
    document.getElementById('confidence').innerText = `Confidence: ${data.confidence * 100}%`;
};

export { updateUI };
