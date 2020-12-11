const express = require('express');
const Register = require('../models/register');
const router = express.Router();
router.post('/registers', (req, res) => {
    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        pass: encodeURIComponent(req.body.pass),
        cpass: encodeURIComponent(req.body.cpass)
    }
    const register = new Register(data);
    register.save().then(data => {
      res.status(200).send(data);
  }).catch(err => {
      res.status(404).send(err.message);
  })
});
router.post('/login', (req,res,next) => {
    // const registerdata = new Register()
    Register.findOne({email: req.body.email, pass: req.body.pass}).then(data => {
     return res.status(200).send('Login Successfully');
    }).catch(e => {
        throw new Error('Invalid Credentials');
    })
})
router.get('/registers', async(req, res) => {
     try {
         const registerData = await Register.find();
         res.status(200).send(registerData);
     } catch(e) {
         res.status(404).send(e.message);
     }
  });
module.exports = router;