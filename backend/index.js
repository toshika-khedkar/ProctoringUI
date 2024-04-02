const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');
const Profile = require('./models/profile');

const app = express();
app.use(express.json());
app.use(cors());

// const week1DB = mongoose.createConnection('mongodb://127.0.0.1:27017/Questionaire');

// // MongoDB connection for week2 questions
// const week2DB = mongoose.createConnection('mongodb://127.0.0.1:27017/Questionaire');

// app.get('/week1', async(req, res) => {
//     try {
//         const Week1QuestionModel = week1DB.model('Week1Question', Week1QuestionSchema);
//         const questions = await Week1QuestionModel.find();
//         res.json(questions);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// app.get('/week2', async(req, res) => {
//     try {
//         const Week2QuestionModel = week2DB.model('Week2Question', Week2QuestionSchema);
//         const questions = await Week2QuestionModel.find();
//         res.json(questions);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });


mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/register', (req, res) => {
    // To post / insert data into database

    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered")
            } else {
                FormDataModel.create(req.body)
                    .then(log_reg_form => res.json(log_reg_form))
                    .catch(err => res.json(err))
            }
        })

})

app.post('/login', (req, res) => {
    // To find record from the database
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {

                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Wrong password");
                }
            } else {
                res.json("No records found! ");
            }
        })
})

app.post('/api/profile', async(req, res) => {
    // try {
    const { firstName, middleName, lastName, degree, educationStatus } = req.body;
    //     const newProfile = new Profile({
    //         firstName,
    //         middleName,
    //         lastName,
    //         degree,
    //         educationStatus
    //     });
    //     const savedProfile = await newProfile.save();
    //     res.json(savedProfile);
    // } catch (error) {
    //     console.error('Error saving profile:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    // }
    Profile.findOne({ firstName: firstName, lastName: lastName })
        .then(profile => {
            if (profile) {
                res.json("Profile already exists");
            } else {
                Profile.create(req.body)
                    .then(profiles => res.json(profiles))
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});


app.listen(3000, () => {
    console.log("Server listining on http://localhost:3000");

});