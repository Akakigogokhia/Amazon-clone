import React from 'react'
import './Css/Product.css'
import { useStateValue } from "./StateProvider";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Product({ id, title, image, price, rating, isChecked }) {

  const [{ basket } , dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          isChecked: isChecked,
          option: '1'
        },
      });
  }

  let productRating=[]

  for(var i=0;i<5;i++){
    if (i < rating){
    productRating[i]=(<StarIcon style={{ color: '#FFA41C', width: '19px' }}/>)}
    else {
      productRating[i]=(<StarBorderIcon style={{ color: '#FFA41C', width: '19px'}}/>)
    }
  }

  return (

    <div className='product'>
        <img src={image}/>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                <p>{productRating}</p>
            </div>
        </div>
        
        <button className='button' onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product