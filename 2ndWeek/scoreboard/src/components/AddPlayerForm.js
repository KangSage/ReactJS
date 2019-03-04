import React from 'react';

export class AddPlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        }
    }

    // 리액트는 브라우저마다 다른 이벤트를 추상화해서 파라미터로 넘겨준다.
    handleValueChange = (e) => {
        this.setState({playerName: e.target.value})
    };


    handleSubmit = (e) => {
        e.preventDefault(); // submit의 기본 동작 차단
        this.props.addPlayer(this.state.playerName);
        // 폼 초기화
        this.setState({playerName: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*JSX 문법에서 input 태그는 반드시 닫아야한다.*/}
                <input type="text" value={this.state.playerName}
                       onChange={this.handleValueChange}
                       placeholder="enter a player's name" required/>
                <input type="submit" value="Add Player"/>
            </form>
        );
    }

}