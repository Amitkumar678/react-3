import React, { Component } from 'react'
import './Assissment.css'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
  
  
  render() {
    return (
      <div>
        <h2>EMPLOYEE FEEDBACK FORM</h2>
        <div className="outputcontainer">
          { this.props.employee.map((elm)=>{
            return(
              <div  className="outputcontainer2">
              <br />
                <h2> {elm.name} ||{elm.dept}||{elm.rating} </h2>
              </div>
             
            )
          })} 
        </div>
        <br />
                <button className='formbtn' onClick={this.props.showdata} >GoBack</button>
      </div>
    )
  }
}

export default Form