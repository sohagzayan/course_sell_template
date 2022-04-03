import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h2>Not Found Page</h2>
            <h4>This page not here</h4>
            <button onClick={()=> navigate('/')} className='bg-dark_blue text-white px-3 py-1 rounded mt-5'>Go Home</button>
        </div>
    );
};

export default NotFoundPage;