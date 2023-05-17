const router = require("express").Router();
const notesRoutes = require("./noteRoutes");

router.use("/notes", notesRoutes); // note the change here

module.exports = router;
