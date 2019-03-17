import React from 'react';
import styles from '../pages/scoreboard/Scoreboard.module.css';

export const Statistics = (props) => {
    const totalPlayers = props.players.length;
    let totalScore = 0; // forEach

    props.players.forEach(item => {totalScore += item.score});

    return (
        <table className={styles.stats}>
            <tbody>
                <tr>
                    <td>PLAYERS:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>TOTAL POINTS:</td>
                    <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    )
};