import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = ({addtoCart}) => {
    return (
        <div className = 'flex justify-between items-center container mx-auto p-5'>
            <div><h1 className='text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-700'>DigiTools</h1></div>
            <div>
                <ul className='flex gap-10'>
                    <li><a href=''>Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href="">Testimonial</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <button className='relative cursor-pointer'><FontAwesomeIcon icon={faCartArrowDown} /><span className='absolute -top-2 -right-3 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center'>{addtoCart.length}</span></button>
                <button className='btn btn-ghost rounded-full'>Login</button>
                <button className='btn btn-primary bg-linear-to-r from-blue-600 to-purple-700 text-white rounded-4xl px-2'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;