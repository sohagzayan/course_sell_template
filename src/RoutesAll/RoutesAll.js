import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../pages/Card';
import Feedback from '../pages/Feedback';
import Home from '../pages/Home';



const RoutesAll = () => {
    return (
        <Routes>
            <Route path='/' element={  <Home />}/>
            <Route path='/card' element={  <Card />}/>
            <Route path='/feedback' element={  <Feedback />}/>
        </Routes>
    );
};

export default RoutesAll;