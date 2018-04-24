
//schema for delivery
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.deliverySchema = new Schema({
    id: String,
    recent_id: String,
    customer_id: String,
    invoice_id : String,
    invoice_number : String,
    payment_due_date: String,
    amount_due: Number,
    billto: String,
    status: String,
    total: Number,
    discount: Number,
    paid_date: String,
    amount_partially_paid: [{ date: Date, amount: Number }],
    productList: [String],
    type: String,
    created_on: { type: Date, default: Date.now },
    normalized: String
});
