const router = require("express").Router();

router.get("/create_user", (req, res) => {
  res.send("Api is working");
});

module.exports = router;
