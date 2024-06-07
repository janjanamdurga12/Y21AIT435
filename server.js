const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email, phone, address, city, zip, country, message } = req.body;

    // Perform any necessary validation or processing here

    // Send a response back to the client
    res.send(`Thank you ${name} for your submission! We'll get back to you soon.`);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
