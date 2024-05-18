const express = require("express");
const router = express.Router();
const pool = require("../config/config.js")

router.get("/", (req, res)=>{
    const sql =  `
     SELECT
     *
     FROM
      category
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


router.get("/:film_category", (req, res)=>{
    const sql =  `
     SELECT
     *
     FROM
      film
     JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id
    `

    pool.query(sql, (err, result)=>{
        if(err){
            console.log(err);
            res.status(500).json({massage: "internal server error"})
        } else {

            res.status(200).json(result.rows);
        }
    })
})



module.exports = router;