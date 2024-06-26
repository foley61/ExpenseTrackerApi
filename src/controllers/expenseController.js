
const Expense = require("../models/expenseModel")

module.exports = {
    list: async(req,res) => {
        const data = await res.getModelList(Expense)
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Expense),
            data
        })
    },
    create: async(req,res) => {
        const data = await Expense.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async(req,res) => {
        const data = await Expense.findOne({_id: req.params.id})
        res.status(200).send({
            error: false,
            data
        })
    },
    update: async(req,res) => {
        const data = await Expense.updateOne({_id: req.params.id},req.body)
        res.status(202).send({
            error: false,
            data,
            new: await Expense.findOne({_id: req.params.id})
        })
    },
    delete: async(req,res) => {
        const data = await Expense.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    }
}