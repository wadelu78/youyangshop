const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect Database
connectDB()

//Init Middleware
//app.use(express.json({extended: false}))
//no need body parser
app.use(express.json())

//Express
//app.Method(PATH, HANDLER)

app.get('/', (req, res) => res.send('Hello World!'))

//Define Routes
//Every backend routes with /api
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/products', require('./routes/products'))
app.use('/api/admin', require('./routes/admin'))
app.use('/api/admin-auth', require('./routes/adminAuth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))