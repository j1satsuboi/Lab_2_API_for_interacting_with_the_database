const express = require('express')
const clientRouter = require('./routes/client.routes')
const requestRouter = require('./routes/request.routes')
const serviceRouter = require('./routes/service.routes')

const PORT = 5500

const app = express()

app.use(express.json())
app.use('/', clientRouter)
app.use('/', requestRouter)
app.use('/', serviceRouter)

app.listen(PORT, () => console.log('Server started on port ' + PORT))