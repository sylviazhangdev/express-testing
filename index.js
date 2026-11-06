// Testing the Express.js framework

//TESTING
// console.log("Hi there, Silverian! :)")

//Require and configure Express.js
const express = require('express');
const app = express();
const port = 3000;

//Require Mongoose package
const mongoose = require('mongoose');

// GET /
app.get('/', (req, res) => {
    //This is a simple text string 
    res.send('Hello Silver student!');
});

// GET /secret
app.get('/secret', (req, res) => {
    //This is a simple Html 
    res.send(`
    <h1>Secret content</h1>
    <p>This is a totally secret!</p>
    `);
});

// GET /json-data
app.get('/json-data', (req, res) => {

    //This is sending some json-data in the response

    // Define an object that will be sent as JSON
    const data = {
        id: 123,
        name: "Fish Toothbrush",
        price: "34.56",
        categories: ["hygiene", "pets", "default"],
    }


    //This is a simple text string 
    res.send(data);
});

// GET /countries/au
// This endpoint/route takes a named parameter, which is uesd inside the handler
app.get('/countries/:code', (req, res) => {

    // Define an object that will be sent as JSON
    const countryCode = req.params.code.toLowerCase;

    //TODO: validation?
    //TESTING
    //    console.log({countryCode});

    // Send country data (JSON)
    // Get country name from the list
    const countries = {
        au: "Australia",
        nz: "New Zealand",
        cn: "China",
        ch: "Switzerland",
        at: "Austria",
        kr: "Korea",
    };

    // Check it country code not found
    if (!Object.hasOwn(countries, countryCode)) {
        // res.status(404).send({message:`Country withCode ${countryCode} not found`});
    }


    //Send country data(JSON)
    res.send({
        code: countryCode,
        name: countries[countryCode],
    });
});





async function main() {

    // Connect to MongoDB instance/database
    await mongoose.connect('mongodb://localhost:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    console.log("Connected to MongoDB database")

    // Start the Express the web server listening (waiting for connections)
    app.listen(port, () => {
        console.log(`Testing Express App is listening on port ${port}`);
    });
}

//Run the main function, catch any DB errors
main().catch(err => console.log(err));
