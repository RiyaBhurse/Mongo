const { mongo } = require("mongoose");
const mongoose = require("mongoose");

// Define the user schema

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('Users', userSchema);