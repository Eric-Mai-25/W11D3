import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cart.js";
import { likeToggle } from "../../store/produce.js";


function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(addToCart(produce.id));
  }

  const handleLike = ()=>{
    dispatch(likeToggle(produce.id))
  }
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;