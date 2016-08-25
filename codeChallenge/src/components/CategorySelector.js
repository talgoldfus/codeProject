import React, { Component } from 'react'

class CategorySelector extends Component {

render(){
  const {field} = this.props
  debugger
      const options= Object.keys(this.props.categories.categories).map((category)=>{
            return  (<option value={category}>{this.props.categories.categories[category]}</option>)
          })

  return (
    <div>
      <select {...field}>
      <option></option>
          {options}
      </select>
    </div>
  )
}}

export default CategorySelector
