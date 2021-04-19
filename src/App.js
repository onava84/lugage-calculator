import React, {Component} from 'react'
import './App.css';
import DisplayedItems from './components/displayedItems/DisplayedItems'
import Header from './components/header/Header'
import Luggage from './components/luggage/Luggage'
import AddForm from './components/addForm/AddForm'
import axios from 'axios'
// import FilterItems from './components/filterItems/FilterItems'


class App extends Component {
   constructor() {
      super()
      this.state = {
         availableItems: [],
         luggageItems: [],
         itemsSelected: [],
         totalWeight: 0,
         weightRange: 0
      }
   }

   getItems = () => {
      axios.get(`/api/items`).then(res => {
         this.setState({
            availableItems: res.data
         })
      })
   }

   getItemsQuery = (query) => {
      axios.get(`/api/items?weight=${query}`).then(res => {
         this.setState({
            availableItems: res.data
         })
      })
   }

   handleDropdown = (e) => {
      this.setState({
         weightRange: e.target.value
      })
   }

   componentDidUpdate = (prevProps,prevState) => {
      if(prevState.weightRange !== this.state.weightRange) {
         this.getItemsQuery(this.state.weightRange)
      }
   }

   componentDidMount = () => {
      this.getItems()
   }

   addToLuggage = (name, quantity, weight) => {
      if(!this.state.itemsSelected.includes(name)) {
         const newItem = {name, quantity, weight}
         this.setState({
            luggageItems: [...this.state.luggageItems, newItem],
            itemsSelected: [...this.state.itemsSelected, name],
            totalWeight: this.state.totalWeight + quantity * weight
         })
      }
   }

   removeFromLuggage = (itemToRemove, quantity, weight) => {
      const index = this.state.luggageItems.findIndex(e => e.name === itemToRemove)
      const newLuggageItems = [...this.state.luggageItems]
      newLuggageItems.splice(index,1)
      const indexSelected = this.state.itemsSelected.findIndex(item => item.name === itemToRemove)
      const newItemsSelected = [...this.state.itemsSelected]
      newItemsSelected.splice(indexSelected, 1)
      this.setState({
         luggageItems: newLuggageItems,
         totalWeight: this.state.totalWeight - quantity * weight,
         itemsSelected: newItemsSelected
      })
   }

   deleteAvailableItem = (id) => {
      axios.delete(`/api/items/${id}`).then(res => {
         console.log(res)
         this.setState({
            availableItems: res.data
         })
      })
   }


   render() {
      console.log(this.state.weightRange)
      return (
         <div className="App">
           <Header />
           <div className="main-container">
              <div className="left-content">
                 <AddForm getItems={this.getItems} />
                 {/* <FilterItems getItemsQuery={this.getItemsQuery} handleDropdown={this.handleDropdown}/> */}
                 <DisplayedItems availableItems={this.state.availableItems} addToLuggage={this.addToLuggage} deleteAvailableItem={this.deleteAvailableItem} getItems={this.getItems} getItemsQuery={this.getItemsQuery} weightRange={this.state.weightRange}/>
              </div>
              <Luggage luggageItems={this.state.luggageItems} totalWeight={this.state.totalWeight} removeFromLuggage={this.removeFromLuggage} />
           </div>
         </div>
       );
   }
}

export default App;