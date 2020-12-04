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
router.post('/login', (req,res) => {
    // const registerdata = new Register()
    Register.find({}).then(data => {
        data.forEach(element => {
            // req.body.pass = Buffer.from(req.body.pass, 'base64').toString();
            // console.log(req.body.pass);
            if (element.pass !== req.body.pass && element.email !== req.body.email) {
                // res.setHeader('login','val');
               return res.status(400).json({
                   error: 'Crendentials mismatch'
                });
            }
               res.status(200).json({
                    success: 'Login Successfully'
                });
        });
    }).catch(e => {
        console.log(e.message);
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