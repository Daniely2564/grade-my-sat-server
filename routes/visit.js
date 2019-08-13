const router = require("express").Router();
const Visit = require("../models/Visit");

router.post("/", (req, res) => {
  const newVisit = new Visit();
  newVisit.location = req.body.location;
  newVisit
    .save()
    .then(visit => {
      console.log(visit);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
