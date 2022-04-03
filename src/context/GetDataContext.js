import React, { createContext, useContext, useEffect, useState } from 'react';


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


    



    return (
        <DataContext.Provider value={{products ,setProducts , card , setCard,searchKeyWord , setSearchKeyWord}}>
                {children}
        </DataContext.Provider>
    );
};

