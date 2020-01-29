import React from "react";

const styles = {
    width: "150px",
    height: "auto"
}

function ImageCard(props) {
    return (
        <div className="card">
            <img className="card-img" style={styles} id={props.id} alt={props.alt} src={props.src} onClick={props.click}/>
        </div>
    )
}

export default ImageCard;
