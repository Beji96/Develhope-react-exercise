import React, { Component } from 'react'

export default class ClickCounter extends Component {
    state = {count: 0}
    handleCounterIncremnt(){
        this.setState((state)=>{
            return{
                count: state.count +1
            }
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncremnt.bind(this)}>
            Increment
        </button>
        <h2>counter: {this.state.count}</h2>
        
        </div>
    )
  }
}

