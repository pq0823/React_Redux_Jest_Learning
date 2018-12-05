import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { dealCard } from './actions/action';

class App extends Component {
  render() {
    return (
      <div className="App">
        <pre>
          {
              JSON.stringify(this.props)
          }
        </pre>
        <button onClick={() =>this.props.dealCard('card')}>deal card</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state.hand);
    return {...state};
};

const mapDispatchToProps = dispatch => ({
    dealCard: card => dispatch(dealCard(card))
});

/**
 * Connect React Component to Store with `connect` React binding from `react-redux`
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
