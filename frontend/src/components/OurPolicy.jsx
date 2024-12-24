import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="ไอคอนการแลกเปลี่ยน" />
        <p className='font-semibold'>นโยบายการแลกเปลี่ยนที่ง่าย</p>
        <p className='text-gray-400'>เรามีนโยบายการแลกเปลี่ยนที่ไม่ยุ่งยาก</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="ไอคอนการคืนสินค้า" />
        <p className='font-semibold'>นโยบายการคืนสินค้า 7 วัน</p>
        <p className='text-gray-400'>เรามีนโยบายการคืนสินค้าฟรีภายใน 7 วัน</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="ไอคอนบริการลูกค้า" />
        <p className='font-semibold'>การสนับสนุนลูกค้าที่ดีที่สุด</p>
        <p className='text-gray-400'>เรามีบริการลูกค้าตลอด 24 ชั่วโมง</p>
      </div>

    </div>
  )
}

export default OurPolicy