const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(cors());
app.use(express.json());

// Summarization route
app.post('/api/summaries', async (req, res) => {
    const { text } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Format the prompt to request bullet points
        const prompt = `
            Please summarize the following text using bullet points:
            ${text}
            start each bullet point on a new line.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const summary = await response.text();
        res.json({ summary });
    } catch (error) {
        console.error('Error summarizing text:', error);
        res.status(500).json({ error: 'Error summarizing text' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
