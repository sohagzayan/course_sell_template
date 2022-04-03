import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const ShopProduct = ({item , handleAddToCard}) => {
  
    const {coursename ,create ,picture ,price ,quentity , id}  = item
 
    useEffect(()=>{
        Aos.init({duration : 100})
    },[])


    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className='card bg-secondary_white shadow-md mb-5 flex justify-between flex-col'>
             <img src={picture} alt="image" />
             <div className='p-2'>
                 <h2 className=' text-dark_blue font-bold text-md mb-2'>{coursename}</h2>
                 <h4 className='text-sm text-gray-700'> <strong>Course Creator :</strong> {create}</h4> 
                 <div className='flex justify-between mt-3 '>
                 <div>
                 <h6>Prices :${price}</h6>  
                 <span className='text-sm text-dark_blue font-bold'>quentity : {quentity}</span>
                 </div>
                <div className='flex flex-col'>
                <button onClick={()=>handleAddToCard(item)} className='px-4 cursor-pointer py-2  text-sm text-white rounded-md bg-light_tomato mb-3'>Enroll Now</button>
                 <NavLink to={"/feedback/" + id} className='text-sm px-2 text-center cursor-pointer py-1   text-white rounded-md bg-dark_blue'>Details</NavLink>
                </div>
                 </div>
             </div>   
        </div>
    );
};

export default ShopProduct;