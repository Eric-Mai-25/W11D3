import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart,addToCart , minusFromCart} from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(removeFromCart(item.id))
  }

  const handleAddToCart =()=>{
    dispatch(addToCart(item.id))
  }

  const handleMinus = ()=>{
    dispatch(minusFromCart(item.id))
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={handleAddToCart}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleMinus}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;