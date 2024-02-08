var mongoose = require("mongoose");
var bannerSchema = new mongoose.Schema(
  {
    bannerImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var banner = new mongoose.model("Banner", bannerSchema);
module.exports = banner;
