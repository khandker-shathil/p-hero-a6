import React from 'react';
import userImg from "../../assets/user.png"
import chosePro from "../../assets/package.png"
import rocket from "../../assets/rocket.png"

const ThreeSteps = () => {
    return (
        <div className='flex flex-col justify-center items-center py-40 gap-5'>
            <h1 className='font-bold text-5xl text-white'>Get Started in 3 Steps</h1>
            <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex px-10 gap-10'>
                {/* card starts here */}
                <div className='relative max-w-sm w-full rounded-4xl border-gray-300 border p-8 shadow-sm text-center bg-white'>
                    <div className='flex flex-col justify-center items-center mx-auto gap-5'>
                        <div className='absolute top-4 right-4 bg-purple-700 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full p-3'>01</div>
                        <div className='bg-purple-200 rounded-full p-2'> <img src={userImg} alt="" srcset="" /></div>
                        <div className='flex flex-col justify-center items-center px-5 gap-2'>
                            <h1 className='text-3xl text-black'>Create Account</h1>
                            <p className='text-gray-400' >Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
                <div className='relative max-w-sm w-full rounded-4xl border-gray-300 border p-8 shadow-sm text-center bg-white'>
                    <div className='flex flex-col justify-center items-center mx-auto gap-5'>
                        <div className='absolute top-4 right-4 bg-purple-700 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full p-3'>02</div>
                        <div className='bg-purple-200 rounded-full p-2'> <img src={chosePro} alt="" srcset="" /></div>
                        <div className='flex flex-col justify-center items-center px-5 gap-2'>
                            <h1 className=' text-3xl text-black'>Choose Products</h1>
                            <p className='text-gray-400'>Browse our catalog and select the toolsthat fit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className='relative max-w-sm w-full rounded-4xl border-gray-300 border p-8 shadow-sm text-center bg-white'>
                    <div className='flex flex-col justify-center items-center mx-auto gap-5'>
                        <div className='absolute top-4 right-4 bg-purple-700 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full p-3'>03</div>
                        <div className='bg-purple-200 rounded-full p-2'> <img src={rocket} alt="" srcset="" /></div>
                        <div className='flex flex-col justify-center items-center px-5 gap-2'>
                            <h1 className='text-3xl text-black'>Start Creating</h1>
                            <p className='text-gray-400'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeSteps;