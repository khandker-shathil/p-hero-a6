import { useState } from 'react';
import { toast } from 'react-toastify';
const Product = ({p, addtoCart, setaddtoCart, filterButton, setfilterButton}) => {
    const [btnChoose, setbtnChoose] = useState(false);
    const handleProducts = () =>{
        setaddtoCart([...addtoCart, p])
        toast(`${p.icon } ${p.name} Added to Cart`)
        console.log(addtoCart);
        setbtnChoose(true)
    }
    return (
    <div key={p.id} className="max-w-sm w-full rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
        <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-xl">
            {p.icon}
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
            {p.tag}
            </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {p.name}
        </h2>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            {p.description}        
        </p>
        <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">${p.price}</span>
            <span className="text-gray-500 text-sm"> /{p.period}</span>
        </div>
        <ul className="space-y-2 mb-6">
            {p.features.map((f,index)=>(
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500">✔</span>
            {f}
            </li>
            ))}
        </ul>
        <button onClick={() => {handleProducts()}} className="btn  w-full border-none rounded-full text-white font-medium bg-linear-to-r  from-blue-600 to-purple-700 hover:opacity-90 transition" disabled={btnChoose}>
            Buy Now
        </button>
    </div>
    );
};

export default Product;