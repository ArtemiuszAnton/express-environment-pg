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

module.exports = { getAllSkillsDB, createNewSkillDB }