const express = require('express');
const jwt = require('jsonwebtoken')
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
        const token = jwt.sign({_id:data._id},'authentication', {expiresIn: '1h'});
        const verify = jwt.verify(token, 'authentication');
        if (verify) {
            return res.status(200).send({
                token: token
            });
        } else {
            return res.status(404).send({
                err: 'Invalid Crendentials'
            });
        }
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