import React, { useEffect, useState } from 'react'
import './Css/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutItem from './CheckoutItem'
import { useStateValue } from './StateProvider';



function Checkout() {
  const [{ basket } , dispatch] = useStateValue();
  const [selected, setSelected] = useState(true)
  
  const check = (isSelected) => {
      setSelected(!isSelected)
  }

  const deselect = () => {
    if (selected){
        basket.map(item => {
          item.isChecked=false
        })
    } else {
        basket.map(item => {
          item.isChecked=true
        })
        
    }
    setSelected(!selected)
  }
 
  const getOption = (id, option='1') => {
    dispatch({
      type: 'SELECT',
      id: id,
      option: option
    })
  }


  const checkoutItem = basket.map(item =>
      <CheckoutItem 
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        rating={item.rating}
        isChecked={item.isChecked}
        getOption={getOption}
        option={item.option}
        check={check}
      />
    ) 

  return (
    <div className='checkout__container'>
    <div className='checkout'>
        <div className='checkout__left'>
          <div className='checkout__title'>
            <div>
              <h2>Shopping Cart</h2>
              <p onClick={deselect}>{selected? 'Deselect': 'Select'} all items</p>
            </div>
            <small>Price</small>
          </div>
          <div className='checkout__items'>
            {checkoutItem.length? checkoutItem: (<h1>Your Amazon Cart is empty.</h1>)}
          </div>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
    </div>
    </div>
  )
}

export default Checkout