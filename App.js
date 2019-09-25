import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector(state => state.countera);

  const dispatch = useDispatch();
  return (
    <div className="App">
      counter : {counter}
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({
  payload: state.payload
});

const mapDispatchToProps = {
  increment,
  decrement
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
