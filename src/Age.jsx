import React, { Component } from 'react'

export class Age extends Component {
  render() {
    return (
      <div>
        {this.props.age && <p>My age is {this.props.age}</p>}
      </div>
    )
  }
}

export default Age