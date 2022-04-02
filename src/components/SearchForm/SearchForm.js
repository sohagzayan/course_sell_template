import React from 'react';

const SearchForm = () => {
    return (
        <div className='flex items-center justify-center mt-10'>
            <form className='md:w-3/6 w-6/6 bg-secondary_white shadow-md flex items-center rounded-md  py-1 px-4'>
                <input className='w-full font-medium bg-transparent text-light_tomato px-3 border-0 outline-none' type="text" placeholder='Search' />
                    <span className='bg-dark_blue px-4 text-white rounded-md cursor-pointer'>Search</span>
            </form>
        </div>
    );
};

export default SearchForm;