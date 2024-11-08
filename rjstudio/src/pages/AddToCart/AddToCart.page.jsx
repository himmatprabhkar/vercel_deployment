import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';
import { setCartItemCount } from '../../slices/addCartSlice';

export const AddToCart = ({ initialQuantity, price }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  const updateCartValue = (value) => {
    dispatch(setCartItemCount({ cartItemCount: value }));
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    updateCartValue(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      updateCartValue(quantity - 1);
    }
  };

  const imageUrl = useSelector((state) => state.orderDetailSlice);

  return (
    <div className="col-lg-5">
      <div className="mb-3">
        <button
          onClick={() => dispatch(setImageStatus({ imageStatus: 4 }))}
          className="btn btn-primary"
        >
          Back
        </button>
      </div>

      <div className="h4 fw-bold">{imageUrl.productName}</div>
      <ul>
        {imageUrl.productDescription.split(';').map((ele, index) => (
          <li key={index}>
            {ele}
            <br />
            <br />
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <div className="d-flex cart-btn align-items-center gap-3 mt-3 p-1 px-2 rounded-2 mb-4">
          <span onClick={handleDecrement} className="decrement-btn">
            <svg
              fill="#c7c7c7"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
            </svg>
          </span>
          <span>{quantity}</span>
          <span onClick={handleIncrement} className="increment-btn">
            <svg
              fill="#c7c7c7"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </span>
        </div>
        <div className="total-price fw-500 h5 d-flex mb-3 gap-1 align-items-center">
          <span className="">Price</span>
          <span className=" "> ${price * quantity}</span>
        </div>
      </div>
      <button
        onClick={() => updateCartValue(quantity)}
        className="select-size-btn border-1 size-btn m-auto d-block text-center p-2 w-100 rounded text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};
