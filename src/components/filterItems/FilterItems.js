import React, {Component} from 'react'
import './FilterItems.css'

class FilterItems extends Component {
   constructor(props) {
      super(props)
      this.state = {
         weightRange: 1000,
      }
   }

   // handleChange = (e) => {
   //    this.setState({
   //       weightRange: e.target.value
   //    })
   //    this.props.getItemsQuery(e.target.value)
   // }

   render() {
      // console.log(this.state.weightRange)
      // console.log(this.state.weightRange)
      return (
         <div className="filter-container">
            {/* <h2>Filter by weight</h2> */}
            <p className="select-label">Items up to</p>
            <select className="select-options" onChange={e => this.props.handleDropdown(e)}>
               <option value={200}>200</option>
               <option value={400}>400</option>
               <option value={600}>600</option>
               <option value={800}>800</option>
               <option selected value="1000">1000</option>
            </select>
            <p className="unit">g</p>
         </div>
      )
   }
}

export default FilterItems