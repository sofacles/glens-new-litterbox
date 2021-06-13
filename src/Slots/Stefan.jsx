import React from 'react';

const Kid = props => <div><h2>I am the kid</h2>{props.content}</div>
const Parent = () => {
    return <div>
        <h1>This is the parent component</h1><Kid content='Foo' />
        </div>
}

export { Kid, Parent}

