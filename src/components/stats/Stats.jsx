import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-blue-600 to-purple-700 flex p-20 justify-around items-center mt-15 text-white'>
            <div>
                <p className='font-bold text-6xl'>50K+</p>
                <p className='font-light text-gray-300'>Active users</p>
            </div>
            <hr className="w-px h-10 bg-gray-300 border-0" />
            <div>
                <p className='font-bold text-6xl'>200+</p>
                <p className='font-light text-gray-300'>Premium Tools</p>
            </div>
            <hr className="w-px h-10 bg-gray-300 border-0" />
            <div>
                <p className='font-bold text-6xl'>4.9</p>
                <p className='font-light text-gray-300'>Ratings</p>
            </div>
        </div>
    );
};

export default Stats;