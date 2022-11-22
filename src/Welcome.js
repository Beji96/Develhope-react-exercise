// Create a Welcome class component 
//that receives a name prop and renders the 
//Welcome, {name}! message within a p tag.
//Render this component to you App component,
//passing it a name prop of your choosing.

import React, { Component } from 'react'
import Age from './Age'

 class Welcome extends Component {
  render() {
    return (
      <div>
      <p>Welcome, {this.props.name}!</p>
      <Age age ={26}/>
      </div>
    )
  }
}
Welcome.defaultProps={
    name: "Flavius"
}

export default Welcome