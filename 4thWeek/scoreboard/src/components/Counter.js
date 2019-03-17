import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';


class Counter extends React.Component {

    render() {
        const {changeScore, id, score} = this.props;

        //let addBtnClass = 'counter-action' + ' ' + 'decrement';

        return (
            <div className={styles.counter}>
                <button className={classNames(styles["counter-action"], styles.decrement)}
                        onClick={() => changeScore(id, -1)}> - </button>
                <span className={styles["counter-score"]}>{score}</span>
                <button className={classNames(styles["counter-action"], styles.increment)}
                        onClick={() => changeScore(id, 1)}> + </button>
            </div>
        );
    }
}

Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
};

export default connect(null, {changeScore})(Counter);
