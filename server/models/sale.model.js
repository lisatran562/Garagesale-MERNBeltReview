const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, "Item is required"],
        minLength: [3, "Item must be at least 3 characters"]
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
        minLength: [3, "Brand must be at least 3 characters"]
    },
    price: {
        type : Number,
        required: [true, "Price is required"],
        min: [0, "Price must be positive"]
    },
    condition: {
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Item', SaleSchema)
// same as const Sale = mongoose.model('Sale', SaleSchema);
// module.exports = Sale;