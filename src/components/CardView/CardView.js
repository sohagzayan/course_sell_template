import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

const CardView = ({item}) => {

    const {coursename ,create ,picture ,price} = item

    return (
      
            <li className='6 flex sm:flex-row flex-col md:flex-col lg:flex-row  justify-between mb-10 bg-secondary_white p-3 shadow-md'>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row '>
                    <img className='w-32 mr-7' src={picture} alt="" />
                    <div>
                        <h2 className='text-dark_blue'>{coursename}</h2>
                        <span className=''>Creator: {create}</span>
                        <br />
                        <span className='flex items-center text-light_tomato'>${price} <BiBadgeCheck /> </span>
                    </div>
                </div>
                <div>
                    <button className='text-light_tomato hover:underline'>Remove</button>
                    <br />
                    <br />
                    <input type="number" className='w-20 bg-dark_blue text-white' />
                </div>
            </li>   
   
    );
};

export default CardView;