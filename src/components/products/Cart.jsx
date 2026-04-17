import React from 'react';

const Cart = ({addtoCart, setaddtoCart}) => {
    const total = () => {
        let totalPrice = 0;
        addtoCart.map(price=>(
            totalPrice = price.price + totalPrice
        ))
        console.log(totalPrice);
        return totalPrice;
    }
    const handleDelete = (p) => {
        const filterProducts = addtoCart.filter((addtoCart)=>p.id !== addtoCart.id);
        setaddtoCart(filterProducts);
    }
    return (
        <div className='flex flex-col gap-8 p-8 container border border-gray-200 rounded-2xl'>
            <h1 className='font-bold text-3xl'>Your Cart</h1>
            <div>
                { addtoCart.length === 0 ? <div><h1 className='font-extrabold text-4xl'>No Products Selected</h1></div> : 
                addtoCart.map((p,ind)=>{
                    return (
                    <div key={ind} className='flex items-center justify-between my-4 rounded-2xl p-3.5 bg-[#F9FAFC] text-black'>
                        <div className='flex items-center'>
                            <div className='rounded-full p-2 bg-white'>{p.icon}</div>
                        <div>
                            <p>{p.name}</p>
                            <p className='text-gray-500'>${p.price}</p>
                        </div>
                        </div>
                        <button onClick={()=>{handleDelete(p)}} className='btn btn-ghost text-red-500'>Remove</button>
                    </div>)
                })
            }
            </div>
            <div className='container flex justify-between'>
                <p className='text-gray-500'>Total</p>
                <p className='font-bold text-2xl'>${total()}</p>
            </div>
            <button className='btn rounded-full bg-linear-to-r from-blue-600 to-purple-700 text-white'>Proceed to Checkout</button>
        </div>
    
    );
};

export default Cart;