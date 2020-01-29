import React, { Component } from "react";


class Clicker extends Component {
    state = {
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <div class="row">
                <div class="col-md-6">
                    <h2>Score: {this.score}</h2>
                </div>
                <div class="col-md-6">
                    <h2>Top Score: {this.topScore}</h2>
                </div>
            </div>
        )
    }
}