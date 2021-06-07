import React from 'react';


const Table1 = ({data, simpleProp}) => {
    return <>
    <span> {simpleProp} </span>
    <table>
        <tbody>
        {
            data.map((a) => <tr key={a.id}><td>{a.id}</td><td>{a.name}</td></tr> )
        }
        </tbody>
    </table>
    </>
}

export default Table1;