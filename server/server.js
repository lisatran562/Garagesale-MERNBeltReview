const express = require('express')
const app = express()
const cors = require('cors')

require('./configs/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

require('./routes/sale.routes') (app)

app.listen(8000, () => console.log('Listening to port 8000'))