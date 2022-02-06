import React, { Component } from 'react';

class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increment(){
        // this.state.count=this.state.count+1  //never modify the state directly use setstate
        this.setState({
            count:this.state.count+1
        },()=>{console.log("callback value",this.state.count)})
        console.log(this.state.count) // is executed before the state has been changed. 
   // sometimes we want to execute the code once the state has been changed.
    }
    decrement(){
        this.setState({
            count: this.state.count-1
        },()=>{console.log("callback value", this.state.count)})
    }
  render() {
    return(
    <div align="center"> 
     <div > <h2> Using class component</h2>  </div>
        <div >Count-{this.state.count}</div> 
       <button onClick={()=>this.increment()}>INCREMENT</button>
       <button onClick={()=>this.decrement()}>DECREMENT</button>
    </div>)
  }
}

export default Message
