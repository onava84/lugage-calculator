require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {CONNECTION_STRING, SERVER_PORT} = process.env
const {read, readSingleItem,add,update,deleteItem} = require('./itemsController')

app.use(express.json()) 

app.get("/api/items", read)
app.get("/api/items/:id", readSingleItem)
app.post("/api/items", add)
app.put("/api/items/:id", update)
app.delete("/api/items/:id", deleteItem)

massive({
   connectionString: CONNECTION_STRING,
   ssl: { rejectUnauthorized: false }
}).then((dbInstance) => {
   app.set('db', dbInstance)
   
})

app.listen(SERVER_PORT, () => {
   console.log(`My server is running in port ${SERVER_PORT}`)
})






