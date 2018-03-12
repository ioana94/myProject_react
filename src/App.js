import React, { Component } from 'react';
import './App.css';

import Layout from './Pages/layout';
import { onAppInit } from './Actions/auth.js';

import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.onAppInit();
    }
  render() {
    return (
        <div>
            <Layout/>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
    onAppInit: () => dispatch(onAppInit()),
});

export default connect(null, mapDispatchToProps)(App);
