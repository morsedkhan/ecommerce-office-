import React from 'react';

const InputBoxTwo = ({value, onChange}) => {
    console.log("input Two");
    return (
        <div>
            <h1>Input box two</h1>
            <input onChange={onChange} value={value} type="text" placeholder="Input two" />
        </div>
    );
};

export default React.memo(InputBoxTwo);