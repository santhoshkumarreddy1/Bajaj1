const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Check if data is an array
    if (!Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input: 'data' should be an array" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(char => char >= 'a' && char <= 'z').sort().pop() || '';

    res.json({
        is_success: true,
        user_id: "santhoshKumar_24052004",  // Replace with your actual details
        email: "kattasanthosh.kumarreddy2021@vitstudent.ac.in",  // Replace with your actual email
        roll_number: "21BAI1374",  // Replace with your actual roll number
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
