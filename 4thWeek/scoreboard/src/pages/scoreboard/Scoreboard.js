import React from "react";
import Header from "../../components/Header";
import AddPlayerForm from "../../components/AddPlayerForm";
import Player from "../../components/Player";
import connect from "react-redux/es/connect/connect";
import styles from './Scoreboard.module.css'

export class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className={styles.scoreboard}>
          <Header players={this.props.players} />

          {/*Players List*/}
          {
            this.props.players.map(player =>
                <Player name={player.name} id={player.id} key={player.id}
                        score={player.score}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleChangeScore}/>)
          }
          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
      );
  }
}

let mapStateToProps = (state) => ({
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(Scoreboard);