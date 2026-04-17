import React, { use, useState } from 'react';
import Product from './product/Product';

const Products = ({fetchProducts}) => {
    const promisedData = use(fetchProducts)
    const [addtoCart, setaddtoCart] = useState([]);
    const [filterButton, setfilterButton] = useState('products')
    const showCart = () => {
        addtoCart.map(a=>{
            console.log(a.name);
        })
    }
    return (
        <div className='container gap-5 mx-auto mt-20'>
            <div className='flex flex-col justify-center items-center my-10 gap-5'>
                <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='font-light text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div>
                    <button className='btn btn-active bg-linear-to-r  from-blue-600 to-purple-700 rounded-full text-white font-medium p-5'>Products</button>
                    <button onClick={() => {showCart()}} className='btn btn-outline rounded-full border-0'>Cart(2)</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-auto mt-5'>
            {
                promisedData.map(p => (
                <Product p={p} addtoCart={addtoCart} setaddtoCart={setaddtoCart} filterButton={filterButton} setfilterButton={setfilterButton}></Product>
                ))
            }
            </div>
        </div>
    )
       
};

export default Products;