const express = require('express');
const Register = require('../models/register');
const router = express.Router();
router.post('/registers', (req, res) => {
    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        pass: req.body.pass,
        cpass: req.body.cpass
    }
    const register = new Register(data);
    register.save().then(data => {
      res.status(200).send(data);
  }).catch(err => {
      res.status(404).send(err.message);
  })
});
router.post('/login', (req,res) => {
    Register.find().then(data => {
        data.forEach(element => {
            if (element.pass !== req.body.pass && element.email !== req.body.email) {
                res.status(401).json({
                   error: 'Crendentials mismatch'
                });
                return false;
            } else {
                res.status(200).json({
                    success: 'Login Successfully'
                })
            }
        });
    })
})
router.get('/registers', async(req, res) => {
      try {
        const registers = await Register.find();
        res.status(200).send(registers);
      } catch (e) {
          res.status(404).send(e.message);
      }
  });
module.exports = router;