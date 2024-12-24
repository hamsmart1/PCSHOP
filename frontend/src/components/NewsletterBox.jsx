import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center bg-gray-100 py-10'>
  <p className='text-2xl font-medium text-gray-800'>สมัครรับข่าวสาร & รับส่วนลด 20%</p>
  <p className='text-gray-400 mt-3'>ติดตามข่าวสารและโปรโมชั่นพิเศษจากเราได้ก่อนใคร</p>
  <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-white rounded-lg'>
    <input className='w-full sm:flex-1 outline-none p-3' type="email" placeholder='กรอกอีเมลของคุณ' required />
    <button type='submit' className='bg-black text-white text-xs px-10 py-4'>สมัครสมาชิก</button>
  </form>
</div>
    );
}

export default NewsletterBox;