const { pool } = require('../db');

async function getAllSkillsDB() {
    const client = await pool.connect()
    const queryText = 'SELECT * FROM enviroment';
    const data = (await client.query(queryText)).rows
    if (!data.length) throw new Error('skills is empty')
    return data
}

async function createNewSkillDB(label, category, priority) {
    const client = await pool.connect();
    const sql = "INSERT INTO enviroment (label, category, priority) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await client.query(sql, [label, category, priority])
    return rows
}

async function updateSkillDB(id, label, category, priority) {
    const client = await pool.connect();
    const sql = "UPDATE enviroment set label = $1, category = $2, priority = $3 where id = $4 returning *"
    const { rows } = await client.query(sql, [label, category, priority, id]);
    return rows
}

async function deleteSkillDB(id) {
    const client = await pool.connect();
    const sql = "DELETE FROM enviroment WHERE id = $1 returning *";
    const { rows } = await client.query(sql, [id]);
    return rows
}

async function updateSkillOnReqDB(id, body) {
    const client = await pool.connect();
    const sql_1 = "SELECT * FROM enviroment WHERE id = $1";
    const { rows } = await client.query(sql_1, [id]);

    const newSkill = { ...rows[0], ...body }
    const sql_2 = "UPDATE enviroment SET label = $2, category = $3, priority = $4 WHERE id = $1 returning *";
    const data = (await client.query(sql_2, [id, newSkill.label, newSkill.category, newSkill.priority])).rows;
    return data
    // return rows
}
module.exports = { getAllSkillsDB, createNewSkillDB, updateSkillDB, deleteSkillDB, updateSkillOnReqDB }