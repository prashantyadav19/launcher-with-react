import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction'
class App extends Component {
    simpleAction = (event) => {
        this.props.abc();
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>
 {
     JSON.stringify(this.props)
 }
</pre>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    abc: () => dispatch(simpleAction())
})
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
