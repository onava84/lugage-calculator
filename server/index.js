const express = require('express')
const app = express()
const ic = require('./itemsController')
const PORT = 6000
app.use(express.json())

app.get("/api/items", ic.read)
app.get("/api/items/:id", ic.readSingleItem)
app.post("/api/items", ic.add)
app.put("/api/items/:id", ic.update)
app.delete("/api/items/:id", ic.delete)

app.listen(PORT, () => {
   console.log(`My server is running in port ${PORT}`)
})