import React from 'react';
import greenChair from './greenChair.jpg';

const divStyle = {
    float: "left",
    height: "32px",
    width: "32px"
}

const iconStyle = {
    height: "100%",
    width: "100%"
}

const Icon = () => {
    return <div style={divStyle}>
                <img alt="" src={greenChair} style={iconStyle}/>
            </div>
}

export default Icon;

