const items = require('../items.json')
let id = items[items.length - 1].id + 1;

module.exports = {
   read: (req, res) => {
      const db = req.app.get('db')
      // const { weight } = req.query
      db.get_all_items().then(items => {
         res.status(200).send(items)
      }).catch((e) => {console.log(e)})
   },
   readSingleItem: (req, res) => {
      const db = req.app.get('db')
      const { id } = req.params
      db.get_single_item(id)
      .then((character) => {
         res.status(200).send(character)
      })
      .catch((e) => {
         res.status(500).send(e)
      })
   },
   add: (req, res) => {
      const db = req.app.get('db')
      const {name, weight, image} = req.body
      db.add_new_item(name,weight,image)
      .then(() => {
         res.sendStatus(200)
      })
      .catch((e) => {
         res.status(500).send(e)
      })
   },
   update: (req, res) => {
      const db = req.app.get('db')
      const { id } = req.params
      const {name, weight, image} = req.body
      db.update_item(id,name,weight,image)
      .then(() => {
         res.sendStatus(200)
      })
      .catch((e) => {
         res.status(500).send(e)
      })
      
   },
   deleteItem: (req, res) => {
      const db = req.app.get('db')
      const { id } = req.params
      db.delete_item(id)
      .then((character) => {
         res.status(200).send(character)
      })
      .catch((e) => {
         res.status(500).send(e)
      })
   }
}