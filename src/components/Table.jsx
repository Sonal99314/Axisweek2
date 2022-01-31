import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props){
    super(props)
    this.state={name:"React class state",age:"26"}
    this.handleChange=this.handleChange.bind(this)
  }
 handleChange(){
    console.log(this.state)
    this.setState((state)=>({name:"XYZ"}
   ))

  }
  render() {
    return <div>
      
     <h2> {this.state.name} </h2>

  <button /* onClick={()=>{console.log(this.state)
  this.setState((initialState)=>(
    {name:"react class state change"}
  ))
  }}>*/onClick={this.handleChange}>
  CLICK HERE TO CHANGE STATE
</button>
   
    </div>;
  }
}


//this.setState((state)=>{
   // return {name:"XYZ"}
//})