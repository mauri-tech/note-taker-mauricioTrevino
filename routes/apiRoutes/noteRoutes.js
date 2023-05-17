const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const dbPath = path.join(__dirname, "../../db/db.json");

// GET /api/notes
router.get("/", (req, res) => { // note the change here
  try {
    const data = getDataFromJson();
    console.log({ data });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/notes/:id
router.delete("/:id", (req, res) => { // note the change here
  try {
    let data = getDataFromJson();
    data = data.filter((el) => el.id !== req.params.id);
    writeDataToJson(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/notes
router.post("/", (req, res) => { // note the change here
  try {
    let data = getDataFromJson();
    const newNote = { ...req.body, id: uuidv4() };
    console.log(newNote);
    console.log(req.body);
    data.unshift(newNote);
    writeDataToJson(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Helper function to read data from JSON file
function getDataFromJson() {
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data);
}

// Helper function to write data to JSON file
function writeDataToJson(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data), "utf8");
}

module.exports = router;
