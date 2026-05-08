const express = require("express");

const router = express.Router();

router.get("/users/:id", (req, res) => {
  res.send(`GET user ${req.params.id}`);
});

router.post("/users/:id", (req, res) => {
  res.send(`POST user ${req.params.id}`);
});

router.put("/users/:id", (req, res) => {
  res.send(`PUT user ${req.params.id}`);
});

router.patch("/users/:id", (req, res) => {
  res.send(`PATCH user ${req.params.id}`);
});

router.delete("/users/:id", (req, res) => {
  res.send(`DELETE user ${req.params.id}`);
});


router.all("/users/:id", (req, res) => {
  res.status(405).send("Method Not Allowed");
});

// Wrong routes
router.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

module.exports = router;