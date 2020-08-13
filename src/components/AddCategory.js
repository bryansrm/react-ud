import React, { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('init')

    const handleInputChange = (e) => {
        var value = e.target.value;
        setInputValue(value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('submit form');
    }

    return (
        <>
        <h1>{inputValue}</h1>
        <form onSubmit={(event) => handleSubmitForm(event)}>
            <input 
                type="text" 
                value={ inputValue }
                onChange={(event) => handleInputChange(event)}
            />
        </form>
        </>
    )

}