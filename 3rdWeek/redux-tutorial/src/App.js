import React, { Component } from 'react';
import './App.css';
import connect from "react-redux/es/connect/connect";
import {updateUser} from "./redux/action";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.users.user}</p>
          <button onClick={()=>this.props.updateUser('KIM')}>Change Name</button>
        </header>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  product: state.products,
  users: state.users
});

// action을 디스패치하는 함수를 props로 매핑
let mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
});

// curring function, HoC
// export default connect(mapStateToProps, mapActionToProps)(App);
export default connect(mapStateToProps, {updateUser})(App);
