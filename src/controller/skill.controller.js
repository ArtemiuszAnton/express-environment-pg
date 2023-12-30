const express = require('express');
const { getAllSkills, createNewSkill } = require('../service/skill.service')
const route = express.Router();


route.get('/', async (_req, res) => {
    try {
        const data = await getAllSkills()
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createNewSkill(label, category, priority);
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})


module.exports = route