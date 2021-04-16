import React, {Component} from 'react'
import './AddForm.css'
import axios from 'axios'

class AddForm extends Component {
   constructor() {
      super()
      this.state = {
         itemName:"",
         itemWeight: "",
         itemImage: ""
      }
   }

   handleInput = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   addAvailableItem = () => {
      if(
         !this.state.itemName ||
         !this.state.itemWeight ||
         !this.state.itemImage
      ) {
         alert("All fields are required")
      } else {
         let newItem = {
            name: this.state.itemName,
            weight: this.state.itemWeight,
            image: this.state.itemImage
         }
         axios.post('/api/items', newItem).then(
            this.props.getItems()
         )
      }
   }

   render() {
      // console.log(this.state.itemName,this.state.itemWeight,this.state.itemImage)
      return (
         <div className="form-container">
            <h3>Add new item</h3>
            <input name="itemName" onChange={(e) => this.handleInput(e)} placeholder="item name" className="input-field"/>
            <input name="itemWeight" onChange={(e) => this.handleInput(e)} placeholder="weight" className="input-field"/>
            <input name="itemImage" onChange={(e) => this.handleInput(e)} placeholder="image" className="input-field"/>
            <button onClick={() => this.addAvailableItem()}>Add item</button>
         </div>
      )
   }
}

export default AddForm