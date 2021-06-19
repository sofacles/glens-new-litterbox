import React from 'react';
const outerStyle = {
    paddingLeft: "10px"
}

const headerStyle = {
    display: "flex",
}

const navStyle = {
    textAlign: "left",
}


const PageHeader = (props) => {
    return <div style={outerStyle}>
               <header style={headerStyle}>
                    <div >{props.iconSlot}</div> 
                    <div >{props.titleSlot}</div>
                </header>  
               
                <nav style={navStyle}>{props.linksSlot}</nav>
            </div>
}

export default PageHeader;

