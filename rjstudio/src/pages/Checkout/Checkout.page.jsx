import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Constants } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';

export const Checkout = () => {
  const imageUrl = useSelector((state) => state.orderDetailSlice);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data] = useState([
    {
      category: 'Image Frame',
      id: imageUrl.motifBorderId,
      image:
        'https://images.unsplash.com/photo-1559116315-702b0b4774ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D',
      price: imageUrl.motifBorderPrice,
      quantity: 1,
      total: imageUrl.motifBorderPrice,
      name: imageUrl.productName,
      amount: imageUrl.motifBorderPrice,
    },
  ]);

  const makePayment = async () => {
    if (localStorage.getItem('token')) {
      const stripePromise = await loadStripe(
        'pk_test_51P83lmSDe7UaLPqa8YtZvn1j2yF752jYJLHtkjHVtabWDHbs8VUVVQExyPuJVyKm0GP8S0uu9Rx9M4uLGp2MnF4R00g5lvuvrZ'
      );

      const body = {
        products: data,
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      };

      const response = await fetch(
        `${Constants.URL.base}/create-checkout-session`,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();

      const result = stripePromise.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <>
      <div className="col-lg-5">
        <div className="mb-3">
          <button
            onClick={() => dispatch(setImageStatus({ imageStatus: 5 }))}
            className="btn btn-primary"
          >
            Back
          </button>
        </div>
        <div className="checkout-conatiner rounded-3 shadow-sm p-4">
          <div className="h5 fw-500">Product Summary</div>
          <div className="border-bottom pb-3">{imageUrl.productName}</div>
          <div className="d-flex flex-column gap-1 my-3 border-bottom pb-3 ">
            <div className="prices d-flex justify-content-between align-items-center">
              <span className="">Total Price</span>
              <span className="fs-14 fw-500"> ₹230</span>
            </div>
            <div className="prices d-flex justify-content-between align-items-center">
              <span className="">Total Price (Discount)</span>
              <span className="fs-14 fw-500"> ₹0</span>
            </div>
            <div className="prices d-flex justify-content-between align-items-center">
              <span className="">Tax & Fee</span>
              <span className="fs-14 fw-500"> ₹20</span>
            </div>
          </div>
          <div className="total-price fw-500 h5 d-flex mb-4 justify-content-between align-items-center">
            <span className="">Total Price</span>
            <span className=" "> ₹250</span>
          </div>
          <div className="promo-code py-3 px-3 rounded-3  d-flex align-items-center justify-content-between mb-4">
            <span>
              <svg
                fill="#000"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
            </span>
            <div className="d-flex flex-column">
              <span className="fw-500">Use a Promo</span>
              <span className="text-muted">Choose Product to Use Promo</span>
            </div>
            <span>
              <svg
                fill="#000"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </span>
          </div>
          <button
            onClick={() => {
              makePayment();
            }}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '3px',
            }}
            className="select-size-btn border-1 size-btn m-auto d-block text-center p-2 w-100 rounded text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};