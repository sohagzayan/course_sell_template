import React, { useState } from 'react';
import { useDataContext } from '../../context/GetDataContext';
import ShopProduct from '../ShopProduct/ShopProduct';
const Shop = () => {
    const [searchResult ,setSearchResult] = useState([])
    const value = useDataContext()
    const {products ,setProducts , card , setCard ,searchKeyWord , setSearchKeyWord}  = value
    
    // add to Card 
    
    const handleAddToCard = (item)=>{
        
        const exit =  card.find(product => product.id === item.id)
        
        if(!exit){
            item.quentity = 1
            setCard([...card ,item])
        
        }else{
            item.quentity = item.quentity + 1
            const exit = card.filter(product => product.id !== item.id )
            setCard([...exit ,item])
        }

    }   

    const Result = products.filter(items => items.coursename.toLowerCase().includes(searchKeyWord.toLowerCase()))

    console.log(Result);
    
    // console.log(products);
    return (
        <div className='grid md:grid-cols-3 md:p-10 px-4 sm:px-1   sm:mx-auto gap-12 mt-10 sm:grid-cols-2 grid-cols-1 '>
            {
                Result.map((item) => <ShopProduct  handleAddToCard={handleAddToCard} key={item.id} item={item}/>)
            }
            
        </div>
    );
};

export default Shop;