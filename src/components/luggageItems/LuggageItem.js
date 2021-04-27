import React from 'react'
import './LuggageItem.css'

function LuggageItem(props) {
   return(
      <div className="luggage-item">
         <p>{props.quantity} - {props.name} <button className="delete-luggage" onClick={() => props.removeFromLuggage(props.name, props.quantity, props.weight)}>x</button></p>
      </div>
   )
}

export default LuggageItem