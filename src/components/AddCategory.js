import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const gandelInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            // console.log('Submit hecho');
            console.log(setCategories(cats => [inputValue,...cats]));
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={gandelInputChange}/>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}