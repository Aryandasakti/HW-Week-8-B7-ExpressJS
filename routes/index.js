
const express = require("express");
const router = express.Router();
const filmsRouter = require("./films.route")
const categoriesRouter = require("./categories.route")


router.use("/api/films", filmsRouter)
router.use("/api/categories", categoriesRouter)


module.exports = router;

