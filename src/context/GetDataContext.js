import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData } from '../utlatis/StoreData';


const DataContext = createContext()

export const useDataContext = ()=>{
    return useContext(DataContext)
}

export const GetDataContext = ({children}) => {

    const [products ,setProducts] = useState([])

    const [searchKeyWord , setSearchKeyWord] = useState('')
    const [card , setCard] = useState([])

    useEffect(()=>{
        fetch(`Data.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    useEffect(()=> {
        const shoppingCardIds = getData()  
        let prevValue = []
        for(const id in shoppingCardIds){
            const FoundProduct = products.find((product)=> product.id === id)
             
            if(FoundProduct){
                const Quentity = shoppingCardIds[id]
                FoundProduct.quantity = Quentity
                prevValue.push(FoundProduct) 

            }   
        }  

        setCard(prevValue)
    },[products])




    return (
        <DataContext.Provider value={{products ,setProducts , card , setCard,searchKeyWord , setSearchKeyWord }}>
                {children}
        </DataContext.Provider>
    );
};

