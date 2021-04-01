const express =  require('express');
const { Roulett,validate } = require('../model/roulettData');
const router = express.Router();

router.post('/', async (req,res) => {
    
    const {valid,error} = validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const data = new Roulett(req.body);
    await data.save();

    res.send("Received!!")
});

router.get('/', async (req,res) => {
    const data = await Roulett.find({});

    res.send(data);
})

module.exports = router;