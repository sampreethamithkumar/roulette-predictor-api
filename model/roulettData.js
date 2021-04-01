const mongoose = require('mongoose');
const Joi = require('joi');

const roulettSchema = new mongoose.Schema({
    tableNum: {
        type: Number,
        min: 0,
        required:true
    },
    time: {
        type: Number,
        min: 0,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        min: 0,
        max: 36,
        required: true
    }
});

function validate(input) {
    const schema = Joi.object({
        tableNum: Joi.number().min(0).required(),
        time: Joi.number().min(0).required(),
        color: Joi.string().required(),
        value: Joi.number().min(0).max(36).required()
    });

    return schema.validate({tableNum: input.tableNum, time: input.time,color: input.color, value: input.value})
}

const Roulett = mongoose.model('Roulett', roulettSchema);

module.exports.Roulett = Roulett;
module.exports.validate = validate;
