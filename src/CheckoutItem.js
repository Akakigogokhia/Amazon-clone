import React, { useEffect, useState } from 'react'
import './Css/CheckoutItem.css'
import { useStateValue } from './StateProvider';
import { useLocation } from 'react-router-dom';

function CheckoutItem({id, image, title, price, rating, isChecked, option, check, getOption=()=>{}, hideButton=false }) {
  const [{ basket } , dispatch] = useStateValue();
  const location = useLocation();
  const needInput = location.pathname == '/checkout';

  
  const removeFromBasket = () => {
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id
    })
  }


  const handleChange = () => {
    if (basket.filter(item => item.isChecked).length===0){
      check(false)
      
    }else if(basket.filter(item => item.isChecked).length===basket.length){
      check(true)
    }

    dispatch({
      type: 'SET_CHECKBOX',
      id: id,
      isChecked: isChecked
    })
  }

  const select = (e) => {
      getOption(id, e.target.value)
  }

  const options = [1,2,3,4,5,6,7,8,9,10,'10+']

  return (
    <div className='checkoutItem'>
      <div className='checkoutItem__checkbox'>
        {needInput && <input type='checkbox' checked={isChecked} onChange={handleChange}/>}
      </div>
      <img className="checkoutItem__image" src={image}/>
      
     
      <div className='checkoutItem__desc'>
      <p className='checkoutItem__title'>{title}</p>
        <small>In Stock</small>
        <small>Shipped from</small>
          <div className='checkoutItem__options'>
            <div className='checkoutItem__select'>Qty: 
              <select onChange={ select } value={option} >
                  {options.map(value => 
                    <option value={value}>{value}</option>
                  )}
              </select>
            </div>
            {!hideButton && (
              <a onClick={removeFromBasket} className='checkoutItem__delete'>Delete</a>
              
              )}
              <a className='checkoutItem__save'> Save for later</a>
          </div>
      </div>
      <p className='checkoutItem__price'>${price}</p>
    
    </div>
  )
}

export default CheckoutItem