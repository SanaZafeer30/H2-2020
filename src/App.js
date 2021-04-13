import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './index.css';

import Users from './containers/Users';
import asyncComponent from './RouteComp/asyncComponent';
import Header from "./Header";

const AsyncPizza = asyncComponent(() => {
    return import('./containers/RecipeOfDay.js');
});

class App extends Component {
    render () {
        const nav={
            position: "absolute",
            top: "24px",
            left: "34px",

        }
        const navLink={
            fontSize: "16px",
            fontFamily: 'EB Garamond',
            fontWeight: "600",
            color: "#fdfffd",
            textTransform: "capitalize",
            borderRadius: "6px",
            outline: "none",
            marginRight: "12px",
            textDecoration:"none"
        }
        return (
            <div>
                <div>
                    <Header/>
                </div>

                <div style={nav}>
                    <Link to="/" style={navLink}>Home</Link>
                    <Link to="/best-recipe" style={navLink}>BestRecipe</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/best-recipe" component={AsyncPizza} />
                </div>
            </div>
        );
    }
}

export default App;