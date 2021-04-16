const items = require('../items.json')
let id = items[items.length - 1].id + 1;

module.exports = {
   read: (req, res) => {
      const { weight } = req.query
      if (weight) {
         const itemsFiltered = items.filter(item => item.weight <= weight)
         res.status(200).send(itemsFiltered)
      } else {
         res.status(200).send(items)
      }
   },
   readSingleItem: (req, res) => {
      const { id } = req.params
      const index = items.findIndex(item => item.id === +id)

      if(index === -1) {
         res.status(400).send("The item does not exist")
      }

      res.status(200).send(items[index])
   },
   add: (req, res) => {
      const {name, weight,image} = req.body
      const newItem = {
         id,
         name,
         weight,
         image,
      }
      items.push(newItem)
      id++
      res.status(200).send(items)
   },
   update: (req, res) => {
      const { id } = req.params
      const {name, weight, image} = req.body
      const index = items.findIndex(item => item.id === +id)
      
      const itemToEdit = items[index]

      items[index] = {
         id: itemToEdit.id,
         name: name || itemToEdit.name,
         weight: weight || itemToEdit.weight,
         image: image || itemToEdit.image
      }
      res.status(200).send(items)
   },
   delete: (req, res) => {
      const { id } = req.params
      const indexToDelete = items.findIndex(item => item.id === +id)
      items.splice(indexToDelete, 1)
      res.status(200).send(items)
   }
}