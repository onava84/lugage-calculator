import React,{Component} from 'react'
import './AvailableItem.css'
import axios from 'axios'

class AvailableItem extends Component {
   constructor(props) {
      super(props)
      this.state = {
         itemQuantity: 0,
         editForm: false,
         name: "",
         weight: "",
         image: ""
      }
   }

   subtractionClick = (e) => {
      if(this.state.itemQuantity >= 1) {
         this.setState({
         itemQuantity: this.state.itemQuantity - 1
      })
      }
   }

   additionClick = (e) => {
      this.setState({
         itemQuantity: this.state.itemQuantity + 1,
      })
   }

   addToLuggageClick = () => {      
      if(this.state.itemQuantity > 0) {
         this.props.addToLuggage(this.props.name, this.state.itemQuantity, this.props.weight)
         this.setState({
            itemQuantity: 0,
         })
      }
   }

   showEditForm = () => {
      this.setState({
         editForm: !this.state.editForm
      })
   }

   cleanInputs = () => {
      this.setState({
         name: "",
         weight: "",
         image: ""
      })
   } 

   updateAvailableItem = (id) => {
      const originalItem = {
         name: this.props.name,
         weight: this.props.weight,
         image: this.props.image,
      }
      const updatedItem = {}

      if(this.state.name.length > 0){
         updatedItem.name = this.state.name
      }
      if(this.state.image.length > 0){
         updatedItem.image = this.state.image
      }
      if(this.state.weight.toString().length > 0){
         updatedItem.weight = this.state.weight
      }

      const newObject = {
         ...originalItem,
         ...updatedItem 
      }

      axios.put(`/api/items/${id}`, newObject)
      .then(res => {
         console.log(res.data)
         // this.props.resDataOnState(res.data)
         this.props.getItemsQuery(this.props.weightRange)
         this.showEditForm();
         this.cleanInputs();
         // this.props.getItemsQuery(this.props.weightRange)
      }).catch(err => {
         console.log(err)
      })

   }

   handleInputChange = (e) => {
      let tempVar = e.target.value
      if(e.target.name === "weight") {
         tempVar = +e.target.value
      }
      console.log(typeof tempVar)
      this.setState({
         [e.target.name]: tempVar
      })
   }
   

   render() {
      return (
      <div className="available-item">
         <button className="delete" onClick={() => this.props.deleteAvailableItem(this.props.id)}>x</button>
         <img className="item-image" src={this.props.image}></img>
         <h3>{this.props.name}</h3>
         <p>Weight: {this.props.weight} g</p>
         <div className="quantity-changer">
            <button onClick={e => this.subtractionClick(e)}>-</button>
            <p className="quantity-number">{this.state.itemQuantity}</p>
            <button onClick={e => this.additionClick(e)}>+</button>
         </div>
         <button onClick={(e) => this.addToLuggageClick(e)} className="item-button">Add to luggage</button>
         <button onClick={(e) => this.showEditForm(e)} className={this.state.editForm?"cancel-edit":"update"}>{this.state.editForm?"Cancel edit":"Edit item"}</button>
         {this.state.editForm?
         <div className="edit-section"> 
            <input className="edit-field" value={this.state.name} placeholder="item name" name="name" onChange={(e) => this.handleInputChange(e)} />
            <input className="edit-field" value={this.state.weight} type="number" placeholder="weight" name="weight" onChange={(e) => this.handleInputChange(e)} />
            <input className="edit-field" value={this.state.image} placeholder="image" name="image" onChange={(e) => this.handleInputChange(e)} />
            <button onClick={e => this.updateAvailableItem(this.props.id)}>Update</button>
         </div>
         :""}
      </div>
      )
   }
}

export default AvailableItem