const router = require("express").Router();
const Quotation = require("./models/Quotations");

router.get("/", async (req, res) => {
  try {
    const quotation = await Quotation.find();
    res.json(quotation);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const quotation = new Quotation({
    author: req.body.author,
    text: req.body.text,
  });

  try {
    const savedQuotaion = await quotation.save();
    res.json(savedQuotaion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/", async (req, res) => {
  Quotation.findOneAndRemove({ _id: req.body.id }, function (err) {
    if (err) console.log(err);
  });
});

router.patch("/", async (req, res) => {
  const updatedQuotation = await Quotation.updateOne(
    {
      _id: req.body.id,
    },
    { text: req.body.text, author: req.body.author }
  );

  res.json(updatedQuotation);
});

module.exports = router;
