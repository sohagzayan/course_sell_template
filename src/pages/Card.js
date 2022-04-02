import React from 'react';
import CardView from '../components/CardView/CardView';
import NotAddCardYet from '../components/Error/NotAddCardYet';
import { useDataContext } from '../context/GetDataContext';
const Card = () => {

    const value = useDataContext()
    const {card ,setCard} = value


    return (
        <div>

             <div className=' md:px-0 px-4 flex w-full justify-around  flex-col flex-col-reverse md:flex-row  '>
                <ul className='w-7/7'>
                    <h2 className='text-2xl text-dark_blue font-semibold  mb-10 mt-10'>Shopping Cart</h2>
                     {
                        card.map(item =>  card ?  <CardView item ={item} /> : <NotAddCardYet /> ) 
                     }   
                </ul>     
                <div className='mt-28 md:px-0 mx-4'>
                     <h3 className='text-1xl mb-3'>Total:</h3>
                     <h2 className='text-4xl mb-3'>$389.95</h2>   
                     <button className='text-2xl mb-2'>Checkout</button>
                     <div className='bg-secondary_white w-64  md:w-full'>
                         <input className='bg-transparent pl-2' type="text" placeholder='Enter coupon ' />
                         <button className='bg-dark_blue px-2 py-1 cursor-pointer text-white'>Apply</button>
                     </div>
                </div>
            </div>   



        </div>
    );
};

export default Card;