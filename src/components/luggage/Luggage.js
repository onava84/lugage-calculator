import React, {Component} from 'react'
import './Luggage.css'
import LuggageItem from '../luggageItems/LuggageItem'

class Lugagge extends Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }


   render() {
      const luggageItemsMap = this.props.luggageItems.map(item => {
         return (
            <LuggageItem quantity={item.quantity} name={item.name} weight={item.weight} removeFromLuggage={this.props.removeFromLuggage} />
            // <p>{item.quantity} {item.name} <button onClick={() => this.props.removeFromLuggage(item.name, item.quantity, item.weight)}>x</button></p>
         )
      })
      return (
         <div className="lugagge-container">
            <div className="inner-container">
               <h2>Luggage items</h2>
               {luggageItemsMap}
               <h3 className="total-weight">Total Weight: {this.props.totalWeight / 1000} kg</h3>
            </div>
         </div>
      )
   }
}

export default Lugagge