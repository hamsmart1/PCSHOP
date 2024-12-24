import React from 'react'
import PROMOTION from '../assets/PROMOTION.png'

const Promotion = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <img className='w-full' src={PROMOTION} alt="PROMOTION" />
    </div>
  )
}

export default Promotion