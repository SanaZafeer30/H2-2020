import React, { Component } from 'react';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class RecipeOfDay extends Component {
    render () {
        const mainContainer= {
            padding: "30px",
            height: "100%",
            background: "#f9fdf8"
        }
        return (
            <div style={mainContainer}>
                <h1>Today's best Recipe</h1>
                <h3>The Pizza Recipe</h3>
                <PizzaImage />
            </div>
        );
    }
}

export default RecipeOfDay;