import { Fragment, useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
  const {id, name, imageUrl, price, quantity} = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const increaseItemQuantity = () => addItemToCart(item);
  const decreaseItemQuantity = () => removeItemFromCart(item);
  const removeItem = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container" key={id}>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <div className='arrow' onClick={decreaseItemQuantity}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increaseItemQuantity}>&#10095;</div>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeItem}>&#10005;</div>
    </div>
  )
};

export default CheckoutItem;