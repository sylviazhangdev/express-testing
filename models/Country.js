// Mongoose model(and schema)

//Require Mongoose package
const mongoose = require('mongoose');

// Define a schema (data structure)
const schema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },


});

// Create a Mongoose Model
const Country = mongoose.model("Country", schema);

// Express Model
module.exports = Country;