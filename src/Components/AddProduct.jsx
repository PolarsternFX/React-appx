
import React, { useState } from 'react';

import {PropTypes} from 'prop-types';

function AddProduct ( {setCategory} ) {

    const [Input, setInput] = useState ([]);

    const handlerChange = (e) => {
        setInput (e.target.value);
        console.log (Input);
    }

    const handlerSubmit = (e) => {
        e.preventDefault ();
        if (Input.trim().length >= 2) {
        setCategory (Cat => [...Cat, Input]);
        console.log (Input);
        setInput ('');        
    }
}


    
    return (
        <div>
            <hr/>

            <h1> Add a New Product to Shop Cart </h1>

            <form onSubmit = {handlerSubmit}>

                <input 
                type = "text" 
                value= {Input}
                onChange = {handlerChange}
                />
            
            </form>

            <button
                onClick={handlerSubmit}
                type="button"
                className="btn btn-danger">
                Add Another Product!
            </button>

            <hr/>
        </div>
    )
}

AddProduct.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddProduct;