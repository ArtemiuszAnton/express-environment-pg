const express = require('express');
const { getAllSkills, createNewSkill, updateSkill, deleteSkill, updateSkillOnReq } = require('../service/skill.service');
const { isValidSkill } = require('../helper/validation');
const route = express.Router();


route.get('/', async (_req, res) => {
    try {
        const data = await getAllSkills()
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

route.post('/', isValidSkill, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createNewSkill(label, category, priority);
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})


route.put('/:id', isValidSkill, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const { id } = req.params;
        const data = await updateSkill(id, label, category, priority);
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteSkill(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

route.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const data = await updateSkillOnReq(id, body);
        res.status(200).send(data)

    } catch (er) {
        res.status(400).send(er.message)

    }
})


module.exports = route