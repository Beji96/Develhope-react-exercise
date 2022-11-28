import React, { Component } from 'react'

export class Age extends Component {
  render() {
    return (
      <div>
        {this.props.age < 18 ? <p>You are very young!</p> : <p>Your age is {this.props.age}</p>}
      </div>
    )
  }
}

export default Age