const express = require("express");
const router = express.Router();

//  @route          POST api/users
//  @desciption     Register a user
//  @access         Public
router.post("/", (req, res) => {
  res.send("Registers a user");
});

module.exports = router;
