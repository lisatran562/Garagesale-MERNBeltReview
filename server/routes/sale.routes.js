const SaleController = require('../controllers/sale.controller')


module.exports = (app) => {
    app.get('/api/test', SaleController.testApi)
    app.get('/api/items', SaleController.allItems)
    app.get('/api/items/:id', SaleController.oneItem)
    app.post('/api/items', SaleController.addItem)
    app.put('/api/items/:id', SaleController.updateItem)
    app.delete('/api/items/:id', SaleController.deleteItem)

}