import React, {Component} from 'react'
import './Luggage.css'

class Lugagge extends Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }


   render() {
      const luggageItemsMap = this.props.luggageItems.map(item => {
         return (
            <p>{item.quantity} {item.name} <button onClick={() => this.props.removeFromLuggage(item.name, item.quantity, item.weight)}>x</button></p>
         )
      })
      return (
         <div className="lugagge-container">
            <h2>Lugagge</h2>
            {luggageItemsMap}
            <h3>Total Weight: {this.props.totalWeight / 1000} kg</h3>
         </div>
      )
   }
}

export default Lugagge