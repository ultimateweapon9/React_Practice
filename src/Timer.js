import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <React.StrictMode>
                <p>The Time is {this.state.date.toLocaleTimeString()}</p>
            </React.StrictMode>
        )
    }

    componentDidMount() {
         this.timerID = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()});
    };
}

export default Timer