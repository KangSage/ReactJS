import React from "react";
import Counter from "./Counter";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {removePlayer} from "../redux/actions";

class Player extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number,
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func
    };

    render() {
        console.log(this.props.name, 'rendered');
        const {removePlayer, name, score, id, changeScore} = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(this.props.id)}>X</button>
                </span>
                <span className="player-name">{name}</span>
                {/*모든 props를 넘기려면 { ...props }*/}
                <Counter score={score}
                             id={id}
                             changeScore={changeScore}/>
            </div>
        );
    };

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log('componentWillReceiveProps:', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(nextProps);
        return nextProps.score !== this.props.score;
    }
}

export default connect(null, {removePlayer})(Player)