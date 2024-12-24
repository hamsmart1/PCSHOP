import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'ติดต่อ'} text2={'เรา'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="ติดต่อเรา" />
        <div className='flex flex-col justify-center items-start gap-6 bg-white p-6 shadow-lg rounded-lg'>
  <p className='font-semibold text-2xl text-gray-800'>ร้าน Banana</p>
  <p className='text-gray-600 leading-relaxed'>
    10510 ซอยบ้านบึ้ม <br />
    ถนนอะไรวะ จ. กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลกภพ นพรัตนราชธานีบูรีรมย์ อุดมราชนิเวศน์มหาสถาน อมรพิมานอวตารสถิต สักกะทัตติยวิษณุกรรมประสิทธิ์
  </p>
  <p className='text-gray-600'>
    โทร: +0000000000000000000000 <br />
    อีเมล: gdasgdsgsdgsdg@gmail.com
  </p>
</div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact