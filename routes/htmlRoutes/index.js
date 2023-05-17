const path = require("path");
const express = require("express");
const router = express.Router();

const publicFolderPath = path.join(__dirname, "../../public");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(publicFolderPath, "notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(publicFolderPath, "index.html"));
});

module.exports = router;
