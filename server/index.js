require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {CONNECTION_STRING} = process.env
const ic = require('./itemsController')
const PORT = 6000

app.use(express.json()) 

app.get("/api/items", ic.read)
app.get("/api/items/:id", ic.readSingleItem)
app.post("/api/items", ic.add)
app.put("/api/items/:id", ic.update)
app.delete("/api/items/:id", ic.delete)

massive({
   connectionString: CONNECTION_STRING,
   ssl: { rejectUnauthorized: false }
}).then((dbInstance) => {
   app.set('db', dbInstance)
   app.listen(PORT, () => {
      console.log(`My server is running in port ${PORT}`)
   })
})






