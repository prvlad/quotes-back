const mongoose = require("mongoose");

const QuotationSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Quotations', QuotationSchema);
