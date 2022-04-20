import React, { Component } from 'react'
import Form from './Form'
import './Assissment.css'

export class Employee extends Component {
    state={
        clicked:false,
        name:"",
        dept:"",
        rating:"",
        user:[]
    }
    funhandlar=(event)=>{
     this.setState({[event.target.name]:event.target.value})
    }

    showEmployeedata=()=>{
      this.setState({clicked:!this.state.clicked})
    }

    submithandlar=(event)=>{
event.preventDefault()
console.log(this);

const tempobj={
    name:this.state.name,
    dept:this.state.dept,
    rating:this.state.rating,
}
const user1=[...this.state.user]

user1.push(tempobj);

this.setState({
    user:user1,
    clicked:true,
    name:"",
    dept:"",
    rating:""
    })
    }

   
  render() {
    return (

      <div className='container'>
    {!this.state.clicked ? 
    <>
      <h2>EMPLOYEE FEEDBACK FORM</h2>
      <br />
        <form action="">
            <label className='label1' htmlFor="name">NAME</label>
            <input className='inputbtn' type="text" id='name' name='name' value={this.state.name} onChange={(event)=>{this.funhandlar(event)}}/>
            <br />
            <label className='label1' htmlFor="dept">DEPARTMENT</label>
            <input className='inputbtn' type="text" id='dept' name='dept' value={this.state.dept} onChange={(event)=>{this.funhandlar(event)}}/>
            <br />
            <label className='label1' htmlFor="rating">RATING</label>
            <input className='inputbtn' type="text" id='rating' name='rating' value={this.state.rating} onChange={(event)=>{this.funhandlar(event)}}/>
            <br />
            <button className='btn' onClick={(event)=>{this.submithandlar(event)}} >SUBMIT</button>
        </form>
       </>:  
        <Form employee={this.state.user} showdata={this.showEmployeedata} />
        }
      </div>
    )
  }
}

export default Employee
