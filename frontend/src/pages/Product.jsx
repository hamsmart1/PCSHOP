import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- ข้อมูลสินค้า -------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- รูปภาพสินค้า ------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- ข้อมูลสินค้า ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>

          </div>
          <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>เพิ่มลงในรถเข็น</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>สินค้าแท้ 100% รับประกันคุณภาพ</p>
              <p>สามารถชำระเงินปลายทางได้สำหรับสินค้านี้</p>
              <p>เปลี่ยนหรือคืนสินค้าได้ง่ายภายใน 7 วัน</p>
          </div>
        </div>
      </div>

      {/* ---------- คำอธิบาย & รีวิว ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>คำอธิบาย</b>
          <p className='border px-5 py-3 text-sm'>รีวิว (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>เว็บไซต์อีคอมเมิร์ซเป็นแพลตฟอร์มออนไลน์ที่ช่วยให้สามารถซื้อขายสินค้าและบริการผ่านอินเทอร์เน็ตได้ โดยทำหน้าที่เป็นตลาดออนไลน์ที่ช่วยให้ธุรกิจและลูกค้าสามารถติดต่อสื่อสารและทำธุรกรรมได้โดยไม่ต้องมีหน้าร้านจริง</p>
          <p>เว็บไซต์อีคอมเมิร์ซมักแสดงสินค้าและบริการพร้อมคำอธิบาย รูปภาพ ราคา และตัวเลือกต่าง ๆ (เช่น ขนาด สี) โดยแต่ละสินค้าจะมีหน้าสำหรับแสดงข้อมูลเฉพาะ</p>
        </div>
      </div>

      {/* --------- สินค้าที่เกี่ยวข้อง ---------- */}

      <RelatedProducts category={productData.category}  />

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
