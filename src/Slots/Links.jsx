import React from 'react';

const ulStyle = {
    listItemStyle: "none",
    paddingLeft: "0"
}

const liStyle = {
    display: "inline",
    marginRight: "10px",
}

const noUnderline = {
    textDecoration: "none"
}

const Links = ({linkData}) => {
    const listItems = linkData.map(l => <li key={l.id} style={liStyle}>
            <a href={l.href} style={noUnderline}>{l.text}</a>
        </li>);
    return <ul style={ulStyle}>
                {listItems}
            </ul>
}

export default Links;

