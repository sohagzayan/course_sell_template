 import React from "react";
import CardView from "../components/CardView/CardView";
import NotAddCardYet from "../components/Error/NotAddCardYet";
import { useDataContext } from "../context/GetDataContext";
import { removeFormLocalStorage } from "../utlatis/StoreData";


const Card = () => {
  const {card, setCard} = useDataContext();


    let total  = 0
    let quentityTotal  = 0

    for(const product of card){
        quentityTotal = quentityTotal + product.quentity
        total = total + product.price * quentityTotal
    }

    const handleResetAll = ()=>{
      setCard([])
      removeFormLocalStorage()
    }

  return (
    <div>
      <div className=" md:px-0 px-4 flex w-full justify-around   flex-col-reverse md:flex-row  ">
        <ul className="w-7/7">
          <h2 className="text-2xl text-dark_blue font-semibold  mb-10 mt-10">
            Shopping Cart <button onClick={ handleResetAll } className="text-light_tomato underline" href="/">Reset All</button>
          </h2>
          {card.length > 0 ? (
            card.map((item) => <CardView   item={item} />)
          ) : (
            <NotAddCardYet />
          )}
        </ul>
        <div className="mt-28 md:px-0 mx-4">
          <h3 className="text-1xl mb-3">Total:</h3>
          <h2 className="text-4xl mb-3">$ {total}</h2>
          <button className="text-2xl mb-2">Checkout</button>
          <div className="bg-secondary_white w-64  md:w-full">
            <input
              className="bg-transparent pl-2"
              type="text"
              placeholder="Enter coupon "
            />
            <button className="bg-dark_blue px-2 py-1 cursor-pointer text-white">
              Apply
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
