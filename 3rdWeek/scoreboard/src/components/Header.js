import * as React from "react";
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {updateTitle} from "../redux/actions";

const Header = ({title, players, updateTitle}) => {
    //console.log(props);
    //const {title, players} = props;
    return (
        <header>
            <Statistics players={players}/>
            <h1 onClick={() => updateTitle('Test Scoreboard')}>{title}</h1>
            <StopWatch/>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        score: PropTypes.number,
        name: PropTypes.string
    }))
};

Header.defaultProps = {
    title: 'scoreboard'
};

let mapStateToProps = (state) => ({
    title: state.playerReducer.title
});

// let mapActionToProps = (dispatch) => ({
//     updateTitle: (name) => dispatch(updateTitle(name))
// });

export default connect(mapStateToProps, {updateTitle})(Header)