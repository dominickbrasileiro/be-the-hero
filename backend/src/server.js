require('dotenv').config()

const app = require ('./app')

const hostname = process.env.HOST
const port = process.env.PORT

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))