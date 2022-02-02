import React, { Component } from 'react';
import Child from './Child';

 class Message extends Component {
   constructor(props) {
     super(props)
   
     
        this.state={
            parentName:"parent"
        }
        this.greetParent=this.greetParent.bind(this)
     }
     greetParent(){
         alert(`Hello${this.state.parentName}`)  // feature specific to ES6 not to React
     }
   
   
    
  render() {
    return (
   <div>
       <child greethandler={this.greetParent}/>
       </div>)
  }
}

export default Message;
