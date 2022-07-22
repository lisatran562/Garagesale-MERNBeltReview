const Item = require('./../models/sale.model')

module.exports.testApi = (req, res) => {
    res.json({status: "ok"})
}

// Get all
module.exports.allItems = (req, res) => {
    Item.find()
        .then(Items => res.json(Items))
        .catch(err => res.status(400).json(err))
}

// Get one
module.exports.oneItem = (req, res) => {
    // get id from params
    Item.findOne({_id: req.params.id})
        .then(oneItem => res.json(oneItem))
        .catch(err => res.status(400).json(err))
}

// Create
module.exports.addItem = (req, res) => {
    const newItem = req.body
    Item.create(newItem)
        .then(Item => res.json(Item))
        .catch(err => res.status(400).json(err))
}

// Update - getOne + create
module.exports.updateItem = (req, res) => {
    // grab id from params
    const idFromParams = req.params.id
    const updatedValue = req.body
    // update: criteria, updatedValue, options
    Item.findOneAndUpdate(
        {_id : req.params.id}, // or {_id: idFromParams}
        updatedValue,
        {new: true, runValidators: true}
    )
        .then(updatedItem => res.json(updatedItem))
        .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteItem = (req, res) => {
    // const idFromParams = req.params.id
    Item.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
}