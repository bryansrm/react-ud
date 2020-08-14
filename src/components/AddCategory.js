import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('init')

    const handleInputChange = (e) => {
        var value = e.target.value;
        setInputValue(value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 3 ){
            setCategories( categories => [...categories, inputValue]);
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}