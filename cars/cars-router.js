const express = require("express");
const knex = require("knex");

const db = require("../data/connection");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.status(200).json({ data: car });
    })
    .catch(error => {
      res.status(500).json({ data: "Something went wrong", error });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
