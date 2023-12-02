//class Component
import React, { Component } from 'react'
import FormPresentation from './FormPresentation'

class FormContainer extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            comment:"",
            option:""
        }
    }
    nameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
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
          <h1>Demo check</h1>
          <FormPresentation 
         {...this.state} 
          nameChange={this.nameChange}
          selectoption={this.selectoption}
          checkSubmit={this.checkSubmit}
          commentChange={this.commentChange}
          />
      </div>
    )
  }
}

export default FormContainer