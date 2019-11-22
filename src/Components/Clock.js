
import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   //timer will update the state every second (1,000 milliseconds)
    componentDidMount() {
      this.timer = setInterval(
        () => this.ticktock(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    //sets the state to the current time
    ticktock() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
        let msg;
        if(this.state.date.getSeconds()%15===0)
        msg="FizzBuzz"
        else if (this.state.date.getSeconds()%5==0)
        msg="Buzz"
        else if (this.state.date.getSeconds()%3==0)
        msg="fizz"
        else
        msg=this.state.date.toLocaleString();
      return (
        <div>
          <h3>{msg}</h3>    
        </div>
      );
    }
  }
  