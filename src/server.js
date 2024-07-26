const express = require('express');
const bodyParser = require('body-parser');

const { run } = require("./app.js");

const app = express();
const port = 3327;

app.use(bodyParser.json());

app.post('/run', async (req, res) => {
    const { code, inputs } = req.body;

    try {
        const result = await run(code, inputs);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
