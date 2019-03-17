import React from "react";
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import connect from "react-redux/es/connect/connect";

class App extends React.Component {
    // state = {
    //     players: [
    //         {name: 'LDK', score: 0, id: 1},
    //         {name: 'HONG', score: 0, id: 2},
    //         {name: 'KIM', score: 0, id: 3},
    //         {name: 'PARK', score: 0, id: 4},
    //     ]
    // };

/*    handleRemovePlayer = (id) => {
        console.log(id);
        this.setState(prevState => ({
            players: prevState.players.filter(item => item.id !== id)
        }))
    };*/

/*
    // 증가 혹은 감소하는 핸들러 메서드
    handleChangeScore = (id, delta) => {
        console.log(id, delta);
        this.setState(prevState => ({
            players: prevState.players.map(item => {
                if (item.id === id) {
                    item.score = item.score + delta;
                }
                return item;
            })
        }));
    };
*/
/*
    // 플레이어를 추가하는 메서드
    handleAddPlayer = (name) => {
        console.log(name);
        // player id 최대 값 찾기
        let maxId = 0;
        this.props.players.forEach(item => {
            if (item.id > maxId) {
                maxId = item.id;
            }
        });
        // 추가
        this.setState({
            players: [
                // 스프레드 연산자
                ...this.props.players,
                // key와 벨류가 같으면 값을 지워도 된다.
                {id: maxId + 1, name, score: 0}
            ]
        })
    };
*/

    render() {
        return (
            <div className="scoreboard">
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

export default connect(mapStateToProps)(App);

