
const Income = require("../models/incomeModel")

module.exports = {
    list: async (req,res) => {
        const data = await res.getModelList(Income)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Income),
            data,
        })
    },
    create: async (req,res) => {
        const data = await Income.create(req.body);
        
        res.status(201).send({
            error: false,
            data,
        })
    },
    read: async (req,res) => {
        const data = await Income.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req,res) => {
        const data = await Income.updateOne({_id:req.params.id}, req.body);
        res.status(202).send({
            error: false,
            data,
            new: await Income.findOne({_id: req.params.id}),
        });
    },
    delete: async (req,res) => {
        const data = await Income.deleteOne({_id: req.params.id});

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    }
}