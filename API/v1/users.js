const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Users retrieved successfully",
    url_endpoint: "/api/v1/users",
  });
});

module.exports = router;
