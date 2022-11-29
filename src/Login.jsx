
import React, { Component } from 'react'

export default class Login extends Component {
    state={
        username:'',
        password:'',
        remember:false
    }
    handleInputChange = (event)=>{
        const value = event.target.value 
        const name = event.target.name 
        const type = event.target.type 
        const checked = event.target.checked 
        this.setState({
            [name]:type  === 'checkbox'? checked: value,
            
        })
    }
   
  handleLoginState = ()=>{
    this.setState({
        username: '',
        password: '',
        remember: false,
    })
  }

  render() {
    return (
      <div>
        <div>
            <button onClick={this.handleLoginState}>Login</button>
        </div>
        <div>
        <input 
        type="text" 
        name='username' 
        placeholder='username'
        value={this.state.username} 
        onChange={this.handleInputChange} />
        {/* password input */}
        <input 
        name='password'
        type='password'
        placeholder='password'
        value={this.state.password}
        onChange={this.handleInputChange}/>
        {/* Checkbox */}
        <input 
         type="checkbox"
         name='remember'
         checked={this.state.remember}
         onChange={this.handleInputChange} />
        </div>
        
      </div>
    )
  }
}
