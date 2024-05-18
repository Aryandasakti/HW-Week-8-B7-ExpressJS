const pool = require("../config/config")
const fs = require('fs')

const actorSql = fs.readFileSync("./db/actor.sql", {encoding: 'utf-8'}); 

pool.query(actorSql, (err, res) => {
    console.log(err)
    console.log('seeding complete')
    pool.end()
})

