const router = require('express').Router();
const User = require('./message');
const validator = require('validator');

router.post('/feedback', async (req, res) => {
    if (validator.isAlpha(req.body.name) && validator.isEmail(req.body.email)) {
        const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phnumber: req.body.phnumber,
        state: req.body.state,
        city: req.body.city,
        school: req.body.school,
        message: req.body.message,
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
    } else {
        res.status(504).json("Pass correct data")
    }
    

});

module.exports = router;