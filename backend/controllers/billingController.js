const tryCatch = require("../middleware/tryCatch");
const { findByIdAndUpdate } = require("../models/billingModal");
const Billing = require("../models/billingModal");
const User = require("../models/userModel");

/** get all billing list   ⩢ */
exports.getBillingList = tryCatch(async (req, res, next) => {
  console.log("req.query.search", req.query.search);
  const { search } = req.query;
  let filterObg = {
    user: req.user._id,
  };

  const billing = await Billing.find({
    user: req.user._id,
    $or: [
      { fullName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
    ],
  });
  res.status(200).json({ success: true, billing });
});

/** get all billing list   ⩢ */
exports.addBilling = tryCatch(async (req, res, next) => {
  const { fullName, phone, email, payableAmount } = req.body;
  const newBilling = await Billing.create({
    fullName,
    phone,
    email,
    payableAmount,
    user: req.user._id,
  });
  const user = await User.findOne({ _id: req.user._id });
  user.billing.push(newBilling._id);
  await user.save();
  res.status(200).json({ success: true, newBilling });
});

/** update  Billing   ⩢ */
exports.updateBilling = tryCatch(async (req, res, next) => {
  const billing = await Billing.findById(req.params.id);
  if (!billing) {
    return next(
      new ErrorHandler(`Billing does not exist with id: ${req.params.id}`)
    );
  }
  const updatedBilling = await Billing.findByIdAndUpdate(req.params, req.body, {
    new: true,
    runValidators: true,
    useFindModify: false,
  });
  res.status(200).json({
    success: true,
  });
});

/** delete   Billing   ⩢ */
exports.deleteBilling = tryCatch(async (req, res, next) => {
  const billing = await Billing.findById(req.params.id);
  if (!billing) {
    return next(
      new ErrorHandler(`Billing does not exist with id: ${req.params.id}`)
    );
  }
  await billing.remove();
  res.status(200).json({
    success: true,
    message: "Delete Billing successfully",
  });
});
