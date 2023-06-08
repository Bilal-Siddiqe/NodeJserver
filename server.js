const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.json([
        {
            name : "Bilal",
            age: 20,
            prof : "Developer"
        },
        {
            name : "Bilal",
            age: 20,
            prof : "Developer"
        },
        {
            name : "Bilal",
            age: 20,
            prof : "Developer"
        }
    ])
})

app.listen(port, () => {
    console.log("Server is Started");
})