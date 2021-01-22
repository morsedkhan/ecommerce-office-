import React from 'react';

const InputBoxOne = ({ value, onChange }) => {
    console.log("input One");
    return (
        <div>
            <h1>Input box One</h1>
            <input onChange={onChange} value={value} type="text" placeholder="Input one" />
        </div>
    );
};

export default React.memo(InputBoxOne);