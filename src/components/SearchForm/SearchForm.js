import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDataContext } from '../../context/GetDataContext';




const SearchForm = () => {

    const {searchKeyWord , setSearchKeyWord} = useDataContext()

    return (
        <div className='flex items-center justify-center mt-10 px-10 '>
            <form className='md:w-3/6 w-full  bg-secondary_white shadow-md flex  items-center rounded-md  py-3 '>
                <input value={searchKeyWord} onChange={(e)=> setSearchKeyWord(e.target.value)} className='w-full font-medium bg-transparent text-light_tomato px-3 border-0 outline-none' type="text" placeholder='Search' />
                    <span className=' px-4 text-dark_blue text-xl  cursor-pointer'><FaSearch /></span>
            </form>
        </div>
    );
};

export default SearchForm;