import React, { Component } from "react";
import Score from "./Score";
import ImageCard from "./ImageCard";
import frogs from "../frogs.json";


class Gameboard extends Component {
    // state
    state = {
        score: 0,
        topScore: 0,
        images: frogs,
        clicked: []
    }

    clickedImage = (event) => {
        let id = event.target.id;
        console.log(id);

        // If state clicked includes the element
        if (this.state.clicked.includes(id)) {
            console.log("Duplicate clicked!");
            console.log(this.state.clicked);
            this.setState({
                score: 0,
                clicked: []
            })
        }
        // Update states with new score and check if topScore has been set
        else {
            console.log("Unique clicked");
            let subClicked = this.state.clicked;
            subClicked.push(id);
            this.setState({
                score: this.state.score + 1,
                topScore: Math.max(this.state.topScore, this.state.score + 1),
                clicked: subClicked,
            })
            console.log(this.state.clicked);
        }

        this.randomizeArray(this.state.images);
    }

    // Found shuffle function from stackoverflow, Fisher Yates Shuffle
    randomizeArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render() {
        return (
            <div>
                <Score>
                    <div className="col-md-6 col-xs-2">
                        <h5>Your Score: {this.state.score}</h5>
                    </div>
                    <div className="col-md-6 col-xs-2">
                        <h5>Top Score: {this.state.topScore}</h5>
                    </div>
                </Score>
                <div className="card-columns">
                    {this.state.images.map(img =>
                        <ImageCard
                            id={img.id}
                            src={img.src}
                            click={this.clickedImage}
                        />
                    )}
                </div>
            </div>
        );
    }

}

export default Gameboard;
