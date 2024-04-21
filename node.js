const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here
    res.send(`Username is $coduro`);
});

app.listen(port, () => {
    console.log(`Server running on https://chegedon1.github.io/ChelseaOduro.github.io/WDPage3.html`);
}); 