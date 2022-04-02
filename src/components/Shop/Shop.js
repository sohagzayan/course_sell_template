import React from 'react';
import { useDataContext } from '../../context/GetDataContext';
import ShopProduct from '../ShopProduct/ShopProduct';
const Shop = () => {
    
    const value = useDataContext()
    const {products ,setProducts , card , setCard}  = value
    
    // add to Card 

    const handleAddToCard = (item)=>{
        setCard([...card ,item])
    }
    console.log(card);
    
    // console.log(products);
    return (
        <div className='grid md:grid-cols-3 md:p-10 px-4 sm:px-1   sm:mx-auto gap-12 mt-10 sm:grid-cols-2 grid-cols-1 '>
            {
                products.map((item) =><ShopProduct  
                handleAddToCard={handleAddToCard}
                key={item.id}
                item={item}
                />)
            }
        </div>
    );
};

export default Shop;