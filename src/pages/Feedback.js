import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDataContext } from '../context/GetDataContext';
const Feedback = () => {
    const navigate = useNavigate()

    const {id} = useParams()

    const {products ,setProducts} = useDataContext()


    const isActiveDetails = products.find(item => item.id === id)

    const handleNavigate = ()=>{
        navigate('/')
    }
    
    console.log(isActiveDetails);
    return (
        <>
        <button onClick={handleNavigate} className='bg-dark_blue text-white px-3 py-1 rounded-md absolute  top-20 left-10'>Go Home</button>
        <motion.div animate={{scale : 1 , }}  className='w-full duration-100 md:w-3/6 bg-secondary_white mx-auto shadow-lg text-center flex flex-col scale-150 items-center p-5'>
            <div className=''>
                <img src={isActiveDetails.picture} alt="" />
            </div>
            <div className='p-4 '>
                <h3 className='text-2xl bg-dark_blue p-2 mb-3 text-white rounded-md'>{isActiveDetails.coursename}</h3>
                <span className='text-dark_blue mb-2'> <small className='text-light_tomato text-2xl'>Course Creator :</small> {isActiveDetails.create}</span>
                <div className=''>
                    <span className='text-1xl'>Prices <small className='text-3xl text-dark_blue font-bold'>{isActiveDetails.price}</small></span>
                    <h4 className='text-1xl'>Quentity <small className='text-3xl text-dark_blue font-bold'>{isActiveDetails.quentity}</small> </h4>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default Feedback;