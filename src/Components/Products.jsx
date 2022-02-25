
import React, { useState} from 'react';
//import { useState } from 'react';

import AddProduct from './AddProduct';
import Collection from './Collection';


function Products() {

    const [Category, setCategory] = useState([]);
/*         'Beverages', 'Cookies', 'Sugar', 'Salt', 'Pepper'
    ]);

    const handlerAdd = () => {
        setCategory([...Category, 'Corn Flakes', 'Bubblegum', 'Candies']);
        //setCategory (['Corn Flakes', 'Bubblegum', 'Candies', ...Category]);
        //setCategory (Cat => [...Cat, 'Bubblegum', 'Candies']); 
    };*/

return (
    <>
        <h1>Products</h1>
        <AddProduct
            setCategory={setCategory}
        />
        <ol>
         {/*    {
                category.map(category => {
                    return <li key={category}>{category}</li>
                })
            } */}
        </ol>
        {/* <button 
            onClick={handleAdd} 
            type="button" 
            className="btn btn-secondary">
                Add Products
        </button> */}

        <Collection Category={Category}/>
    </>
)
}

export default Products;
