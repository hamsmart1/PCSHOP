import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Banana เกิดขึ้นจากความหลงใหลในเทคโนโลยีและความต้องการที่จะนำเสนออุปกรณ์คอมพิวเตอร์และแกดเจ็ตที่ทันสมัยให้แก่ลูกค้า การเดินทางของเราเริ่มต้นด้วยเป้าหมายง่ายๆ: การเป็นแหล่งรวมอุปกรณ์ไอทีที่ลูกค้าสามารถเข้าถึงได้ง่ายและรวดเร็ว

ตั้งแต่เราเริ่มต้น เราได้ทำงานอย่างหนักเพื่อคัดสรรอุปกรณ์และแกดเจ็ตที่มีคุณภาพสูงจากแบรนด์ชั้นนำ ไม่ว่าจะเป็นคอมพิวเตอร์ โน้ตบุ๊ก อุปกรณ์ต่อพ่วง หรืออุปกรณ์เสริมต่างๆ ที่ตอบโจทย์ทั้งการใช้งานทั่วไปและการเล่นเกม
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>บริษัท</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>หน้าแรก</li>
            <li>เกี่ยวกับเรา</li>
            <li>การจัดส่ง</li>
            <li>นโยบายความเป็นส่วนตัว</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>ติดต่อเรา</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+0000000000000000000000</li>
                <li>gdasgdsgsdgsdg@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Banana.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer