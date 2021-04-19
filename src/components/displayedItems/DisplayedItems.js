import React from 'react'
import './DisplayedItems.css'
import AvailableItem from '../availableItem/AvailableItem'

function DisplayedItems(props) {
   const DisplayedMap = props.availableItems.map(e => {
      return <AvailableItem key={e.id} id={e.id} name={e.name} weight={e.weight} image={e.image} addToLuggage={props.addToLuggage} deleteAvailableItem={props.deleteAvailableItem} getItems={props.getItems} getItemsQuery={props.getItemsQuery} weightRange={props.weightRange}/>
   })
   return (
      <div className="displayed-items">
         {DisplayedMap}
      </div>
   )
}

export default DisplayedItems