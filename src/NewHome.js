import React from 'react'
import { useState } from 'react';

const NewHome = () => {

    const [value, setValue] = useState(1)

    const handleValue = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <button onClick={() => handleValue()}> Value {value}</button>
        </div>
    )
}

export default NewHome
