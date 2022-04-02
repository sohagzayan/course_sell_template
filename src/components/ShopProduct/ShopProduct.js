import React from 'react';

const ShopProduct = ({item , handleAddToCard}) => {
  
    const {coursename ,create ,picture ,price}  = item
    
    return (
        <div className='card bg-secondary_white shadow-md mb-5 flex justify-between flex-col'>
             <img src={picture} alt="image" />
             <div className='p-2'>
                 <h2 className=' text-dark_blue font-bold text-md mb-2'>{coursename}</h2>
                 <h4 className='text-sm text-gray-700'> <strong>Course Creator :</strong> {create}</h4> 
                 <div className='flex justify-between mt-3 '>
                 <h6>Prices :${price}</h6>  
                 <button onClick={()=>handleAddToCard(item)} className='px-4 cursor-pointer py-1 text-sm text-white rounded-md bg-light_tomato'>Enroll Now</button>
                 </div>
             </div>   
        </div>
    );
};

export default ShopProduct;