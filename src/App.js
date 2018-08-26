/**
 * App component is using for entry point of app (root component)
 * react-router-dom use for add routing to app
 */
import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Home, AppDetail} from './containers';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/app/:id" component={AppDetail} />
                </div>
            </BrowserRouter>
        )
    }
}
export default App