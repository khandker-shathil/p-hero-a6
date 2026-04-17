import { use } from 'react';
import Cards from '../Cards';
const Product = ({fetchProducts, addtoCart, setaddtoCart}) => {
    const p1 = use(fetchProducts);
    return (
        <div className ='grid grid-cols-3 gap-5 mx-auto mt-5'>
        {        
            p1.map((p2)=>(<Cards key={p2.id} p2={p2} addtoCart={addtoCart} setaddtoCart={setaddtoCart}></Cards>))
        }        
        </div>
    );
};

export default Product;