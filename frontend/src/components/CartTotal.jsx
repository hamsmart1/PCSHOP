import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className='flex flex-col gap-4 text-sm text-gray-700 bg-white p-4 rounded-md shadow'>
  <div className='flex justify-between'>
    <p>ยอดรวมย่อย</p>
    <p>{currency} {getCartAmount()}.00</p>
  </div>
  <hr className='border-gray-200' />
  <div className='flex justify-between'>
    <p>ค่าขนส่ง</p>
    <p>{currency} {delivery_fee}.00</p>
  </div>
  <hr className='border-gray-200' />
  <div className='flex justify-between font-bold text-lg text-gray-800'>
    <b>ยอดรวมทั้งหมด</b>
    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
  </div>
</div>
  )
}

export default CartTotal