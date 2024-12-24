import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'เกี่ยวกับ'} text2={'เรา'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="เกี่ยวกับเรา" />
          <div className='bg-white p-6 shadow-lg flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
  <p>
    Banana เกิดขึ้นจากความหลงใหลในเทคโนโลยีและความต้องการที่จะนำเสนออุปกรณ์คอมพิวเตอร์และแกดเจ็ตที่ทันสมัยให้แก่ลูกค้า การเดินทางของเราเริ่มต้นด้วยเป้าหมายง่ายๆ: การเป็นแหล่งรวมอุปกรณ์ไอทีที่ลูกค้าสามารถเข้าถึงได้ง่ายและรวดเร็ว
  </p>
  <p>
    ตั้งแต่เราเริ่มต้น เราได้ทำงานอย่างหนักเพื่อคัดสรรอุปกรณ์และแกดเจ็ตที่มีคุณภาพสูงจากแบรนด์ชั้นนำ ไม่ว่าจะเป็นคอมพิวเตอร์ โน้ตบุ๊ก อุปกรณ์ต่อพ่วง หรืออุปกรณ์เสริมต่างๆ ที่ตอบโจทย์ทั้งการใช้งานทั่วไปและการเล่นเกม
  </p>
  <b className='text-gray-800'>พันธกิจของเรา</b>
  <p>
    พันธกิจของ Banana คือการมอบความสะดวกสบายและความมั่นใจให้แก่ลูกค้าในทุกการซื้อสินค้า เรามุ่งมั่นที่จะเป็นผู้นำในด้านสินค้าไอทีและบริการที่รวดเร็วและมีคุณภาพ
  </p>
</div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'ทำไมต้อง'} text2={'เลือกเรา'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>สินค้าคุณภาพสูง:</b>
            <p className='text-gray-600'>เราคัดสรรอุปกรณ์ไอทีจากแบรนด์ชั้นนำ เพื่อให้คุณมั่นใจว่าสินค้าทุกชิ้นมีคุณภาพและความทนทาน</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>การช้อปปิ้งที่สะดวกสบาย:</b>
            <p className='text-gray-600'>ด้วยเว็บไซต์และร้านค้าที่ออกแบบมาเพื่อการใช้งานที่ง่ายดาย คุณสามารถเลือกซื้อสินค้าได้อย่างสะดวกสบาย</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>บริการลูกค้าที่ยอดเยี่ยม:</b>
            <p className='text-gray-600'>ทีมงานของเราพร้อมช่วยเหลือคุณในทุกขั้นตอน เพื่อให้คุณได้รับประสบการณ์การช้อปปิ้งที่ดีที่สุด</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About