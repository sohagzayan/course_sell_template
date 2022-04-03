import React, { useState } from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import { useDataContext } from '../../context/GetDataContext';





const CardView = ({item ,totalPrice , setTotalPrice }) => {
    const [quentityValue , setQuentityValue] = useState(item.quentity)
    const {coursename ,create ,picture ,price ,quentity} = item

    const {card , setCard} = useDataContext()

    const handleRemoveFormCard = (id)=>{
        const exit = card.filter(item => item.id !== id)
        setCard(exit)
    }

    const handleQuentityValue = (e)=>{
        e.target.value < 0 ? alert("nothind add nagative value ") : setQuentityValue(e.target.value)
        item.quentity =   e.target.value
        
    }


    return (
      
            <li className='6 flex sm:flex-row flex-col md:flex-col lg:flex-row  justify-between mb-10 bg-secondary_white p-3 shadow-md'>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row '>
                    <img className='w-32 mr-7' src={picture} alt="" />
                    <div>
                        <h2 className='text-dark_blue'>{coursename}</h2>
                        <span className=''>Creator: {create}</span>
                        <br />
                        <span className='flex items-center text-light_tomato'>${price} <BiBadgeCheck /> </span>
                        <span>Quentity : {quentity}</span>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleRemoveFormCard(item.id)} className='text-light_tomato hover:underline'>Remove</button>
                    <br />
                    <br />
                    <input value={quentityValue} onChange={handleQuentityValue} type="number" className='w-20 text-center   bg-dark_blue text-white' />
                </div>
            </li>   
   
    );
};

export default CardView;