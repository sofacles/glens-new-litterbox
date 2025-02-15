import React from "react";
import "./animations.css"

const ButtonAnimations = () => {
    return (<div
        style={{
            backgroundColor: "#000",
            color: "red",
            display: "flex",
            height: "800px",
            width: "100%",
        }}
    >
        <div className="purina">
            <div className="row">
                <div className="cell">
                    <div className="upAndDown">child of Key Mapping Pane</div>
                </div>
                <div className="absolute-cell">

                    <div className="throbb">
                        <div className="throb-text">text in throb</div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="cell">
                    <div className="upAndDown">child of Key Mapping Pane</div>
                </div>
                <div className="cell">
                    <div className="upAndDown">child of Key Mapping Pane</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ButtonAnimations;