const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    educationStatus: {
        type: String,
        required: true
    }
});

const Profile = mongoose.model('profiles', ProfileSchema);

module.exports = Profile;