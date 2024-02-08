var mongoose = require("mongoose");
var categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
var category = new mongoose.model("Category", categorySchema);
module.exports = category;
