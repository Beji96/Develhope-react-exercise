/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import Welcome from './Welcome'

export default class InteractiveWelcome extends Component {
  state={
    username: ''
  }
  render() {
    return (
      <div>
        <form>
          <input type="text"
          name='flavius'
          value={this.state.username}

          />
        </form>
        {/* // eslint-disable-next-line  */}
        <Welcome name ={name}/>
      </div>
    )
  }
}
