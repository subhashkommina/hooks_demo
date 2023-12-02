import React, { Component } from 'react'

export class DemoForm extends Component {
    constructor()
    {
        super()
        this.state={
            name:"",
            comment:"",
            option:""
        }
    }
    nameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    commentChange=(e)=>{
        this.setState({comment:e.target.value})
    }
    checkSubmit=(e)=>{
        e.preventDefault()
    }
    selectoption=(e)=>{
        this.setState({
            option:e.target.value
        })
    }
  render() {
    return (
      <div>
          <form onSubmit={this.checkSubmit}>
          <h1>Registration Form</h1>
          <label>Name: {this.state.name}</label>
          <input type='text' placeholder='Enter your name' value={this.state.name} onChange={this.nameChange}/>
          <br/>
          <br/>
          <label>password:</label>
          <input type='password' placeholder='Enter your password' />
          <br/>
          <br/>
          <label>Email:</label>
          <input type='email' placeholder='Enter your email' />
          <br/>
          <br/>
          
          <label>Comments:{this.state.comment}</label>
          <textarea rows={10} value={this.state.comment} onChange={this.commentChange}/>
          <br/>
          <br/>
          <label>Branch:{this.state.option}</label>
          
          <select value={this.state.option} onChange={this.selectoption}>
                <option>--</option>
                <option>CSE</option>
                <option>IT</option>
                <option>CST</option>
            </select>
            
            <br/>
            <br/>
            <button >Submit</button>

          </form>
      </div>
    )
  }
}

export default DemoForm;