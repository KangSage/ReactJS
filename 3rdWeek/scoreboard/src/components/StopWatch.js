import React from 'react';

export class StopWatch extends React.Component {
    tickRef;

    state = {
        isRunning: false,
        timer:0
    };

    tick = () => {
        if (this.state.isRunning) {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }
    };

    handleStopWatch = () => {
        this.setState(prevState => ({isRunning: !prevState.isRunning}))
    };

    handleReset = () => {
        this.setState({timer: 0});
    };

    render() {
        return (
            <div className="stopwatch">
                <h2>StopWatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    // DOM 렌더링 된 직후 호출
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    // 파괴되기 직전 호출
    componentWillUnmount() {
        clearInterval(this.tickRef);
    }


}