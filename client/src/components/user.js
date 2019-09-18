import React from 'react'

const review = (props) => {
return (
    <div>
        <button onClick={props.doWhatever}>{props.title}</button>
    </div>
)
} 

export default review;