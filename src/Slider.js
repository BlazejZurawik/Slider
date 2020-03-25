import React from 'react';

function Slider(props) {
    
    return (
        <div id={`week-${props.index}`} className="text"> {props.weeks} </div>
    )
}

export default Slider