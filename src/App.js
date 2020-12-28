import UsersList from './UsersList';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserDetails from './components/UserDetails'

export default function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/users/:id" component={UserDetails}/>
                    <Route path="/" exact component={UsersList}/>
                </Switch>
            </Router>
        </>
    )
}