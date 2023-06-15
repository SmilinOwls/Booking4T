import React, {useEffect, useState} from 'react';
import CheckoutAside from './CheckoutAside';
import {useSelector, useDispatch} from 'react-redux';
import {createOrder, updateStatusOrder} from '../../../Actions/BookingAction';
import {savePaymentMethod} from '../../../Actions/CartAction'
import useTotalPrice from '../../../utils/usePrice'
const CheckoutPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const {userAdress, cartItems} = useSelector((state) => state.cart);
  const checkIn = JSON.parse(localStorage.getItem("checkIn")) || "";
  const checkOut = JSON.parse(localStorage.getItem("checkOut")) || "";
  const numOfGuest = JSON.parse(localStorage.getItem("numOfGuest")) || 0;
  const dispatch = useDispatch();
  const { totalPrice, discount } = useTotalPrice();
  const handleCreateOrder = () => {
    dispatch(savePaymentMethod(paymentMethod));
    const orderData = {
        userInfo: userAdress || JSON.parse(localStorage.getItem("userAdress")),
        cart: cartItems,
        paymentMethod: paymentMethod,
        checkIn: checkIn,
        checkOut: checkOut,
        numOfGuest: numOfGuest,
        taxPrice: 0,
        totalPrice: totalPrice
    };
    dispatch(createOrder(orderData));
    localStorage.removeItem("cart");
    localStorage.removeItem("checkIn");
    localStorage.removeItem("checkOut");
    localStorage.removeItem("userAddress");
  }
  return (
    <>
    <div className='lg:flex lg:gap-2'>
        <div className='lg:w-1/2'>
            <p className='text-[22px] font-semibold text-center mb-4'>Billing Information</p>
            <p className='text-[20px] mb-3'>Full name: {userAdress.fullName}</p>
            <p className='text-[20px] mb-3'>Phone: {userAdress.phone}</p>
            <p className='text-[20px] mb-3'>Indentify Card: {userAdress.IndentifyCard}</p>
            <hr />
            <p className='text-[20px] font-semibold text-center mb-3'>Payment Method</p>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option selected>Select Payment</option>
              <option value="PayPal">PayPal or Credit Card</option>
              <option value="COD">Pay At Hotel</option>
            </select>

        </div>
        <div className='lg:w-1/2 bg-[#FFEEBB]'>
            <CheckoutAside />
        </div>
    </div>
  </>
  )
}

export default CheckoutPayment