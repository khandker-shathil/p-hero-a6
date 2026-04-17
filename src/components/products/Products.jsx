import React, { useState } from 'react';
import Product from './product/Product';
import Cart from './Cart';

const Products = ({fetchProducts}) => {
    const [addtoCart, setaddtoCart] = useState([]);
    const [filterButton, setfilterButton] = useState('products')
    return (
        <div className='container gap-5 mx-auto mt-20'>
            <div className='flex flex-col justify-center items-center my-10 gap-5'>
                <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='font-light text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => {setfilterButton('products')}} className='btn btn-active bg-linear-to-r  from-blue-600 to-purple-700 rounded-full text-white font-medium p-5'>Products</button>
                    <button onClick={() => {setfilterButton('cart')}} className='btn btn-outline rounded-full border-0'>Cart({addtoCart.length})</button>
                </div>
            </div>
            {filterButton === 'products' ? <Product fetchProducts={fetchProducts} addtoCart={addtoCart} setaddtoCart={setaddtoCart} filterButton={filterButton} setfilterButton={setfilterButton}></Product> : <Cart setaddtoCart={setaddtoCart} addtoCart={addtoCart}></Cart> }  
        </div>
    )
       
};

export default Products;