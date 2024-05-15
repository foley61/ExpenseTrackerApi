
const {mongoose} = require("../configs/dbConnection")

const IncomeSchema = new mongoose.Schema({
    userId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
    },
    amount: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: "no description"
    },
    date: {
        type: Date,
        required: true
    }
},{
    collection: "incomes",
    timestamps: true
})

module.exports = mongoose.model("Income",IncomeSchema)