function isValidSkill(req, res, next) {
    const { label, category, prioity } = req.body;

    if (typeof (label) != 'string') throw new Error('label not string');
    if (typeof (category) != 'string') throw new Error('category not string');
    if (typeof (prioity) != 'number') throw new Error('priority not num')
    if (!isNaN(label)) throw new Error('label not valid');
    if (!isNaN(category)) throw new Error('category not valid');
    if (isNaN(prioity)) throw new Error('priority not valid');
    if (prioity < 0) throw new Error('priority < 0');
    next()
}

module.exports = { isValidSkill }