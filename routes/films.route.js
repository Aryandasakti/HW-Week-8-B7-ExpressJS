const express = require("express");
const router = express.Router();
const pool = require("../config/config.js")


router.get("/", (req, res)=>{
    const sql =  `
     SELECT
     *
     from
      film
    `

    pool.query(sql, (err, result)=>{
        if(err){
            console.log(err);
            res.status(500).json({massage: "internal server error"})
        } else {

            res.status(200).json(result);
        }
    })
})


router.get("/:id", (req, res) => {

    const {id} = req.params;


    const sql = `
    SELECT 
      *
    FROM 
      film
    WHERE
      film_id = ${id}
  `

  pool.query(sql, (err, result) => {
    if(err) {
        console.log(err);
        res.status(500).json({massage: "internal server error"})
    } else {

        if(result.rows.length === 0) {

            res.status(404).json({massage: "film not found"})
         } else {

            res.status(200).json(result.rows[0]);
         }
    }
  })

})



module.exports = router;