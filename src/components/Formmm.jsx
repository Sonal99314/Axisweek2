import React, { Component } from 'react';

 class Formmm extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Username:'',
          comments:'',
          topic:''
       }
     }
     handleUsernameChange=(event)=>{
         this.setState({
             Username:event.target.value    // any value is typed by user got captured by event.target.value
         })

     }
     handleCommentsChange=event=>{
         this.setState({
             comments:event.target.value
         })
     }
     handleTopicChange=event=>{
         this.setState({
             topic: event.target.value
         })
     }
     handleSubmit=event=>
     {
         alert(`${this.state.Username} ${this.state.comments} ${this.state.topic}`)
         event.preventDefault()
     }
     
  render() {
    //  const {Username,comments,topic}=this.state // destructure the state // on place of this.state.username=username
    return (
    <form onSubmit={this.handleSubmit}>
    <div>
       <label>Username</label>
       <input type='text' value={this.state.Username} onChange={this.handleUsernameChange}/>
    </div>
    <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
    </div>
    <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicChange}> 
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>vue</option>

        </select>
    </div>
    <button  type='submit'>submit</button>
    </form>
    )
  }
}

export default Formmm;
