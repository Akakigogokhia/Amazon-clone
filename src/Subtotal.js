import React from 'react'
import "./Css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const basketLength = basket.filter(item => item.isChecked).length
  
  return (
    <div className='subtotal'>

        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>Subtotal ({basketLength} item{basketLength>1 && 's'}):
                    <strong>{value}</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)||0}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
        />
        <button onClick={e => navigate('/payment')} className='checkout_button'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal