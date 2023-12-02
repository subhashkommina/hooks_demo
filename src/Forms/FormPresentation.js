import React from 'react'

const FormPresentation=(props)=> {
  return (
    <div>
         <form onSubmit={props.checkSubmit}>
          <h1>Registration Form</h1>
          <label>Name:</label>
          <input type='text' placeholder='Enter your name' value={props.name} onChange={props.nameChange}/>
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
          
          <label>Comments:</label>
          <textarea rows={10} value={props.comment} onChange={props.commentChange}/>
          <br/>
          <br/>
          <label>Branch:</label>
          
          <select value={props.option} onChange={props.selectoption}>
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

export default FormPresentation
/*

            */