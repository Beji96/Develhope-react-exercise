

import React, { Component } from 'react'
import Age from './Age'

 class Welcome extends Component {

  render() {
    return (
      <div>
      <p>Welcome, {this.props.name}!</p>
       <Age age={this.props.age}/>
      </div>
    )
  }
}
Welcome.defaultProps={
    name: "Flavius"
}

export default Welcome