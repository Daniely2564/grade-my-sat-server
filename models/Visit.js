const mongoose = require("mongoose");
const { Schema } = mongoose;

const VisitSchema = new Schema(
  {
    location: Object
  },
  { timestamps: true }
);

module.exports = mongoose.model("Visit", VisitSchema);
