import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
    textInput = React.createRef();

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault(); // submit의 기본 동작 차단
        this.props.addPlayer(this.textInput.current.value);
        // 폼 초기화
        // this.setState({playerName: ''})\
        e.currentTarget.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*JSX 문법에서 input 태그는 반드시 닫아야한다.*/}
                <input type="text" ref={this.textInput}
                       placeholder="enter a player's name" required/>
                <input type="submit" value="Add Player"/>
            </form>
        );
    }
}

export default connect(null, {addPlayer})(AddPlayerForm);