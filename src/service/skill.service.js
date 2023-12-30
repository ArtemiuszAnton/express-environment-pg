const { getAllSkillsDB, createNewSkillDB } = require('../repository/skill.repository');
async function getAllSkills() {
    const data = await getAllSkillsDB();
    return data
}

async function createNewSkill(label, category, priority) {
    const data = await createNewSkillDB(label, category, priority);
    return data
}



module.exports = { getAllSkills, createNewSkill }
