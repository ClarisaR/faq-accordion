
import React from 'react'
import iconStar from '../assets/images/icon-star.svg'

export default function FaqHeader() {
  return (
    <div>
        <h1 className='header'>
            <img src={iconStar} alt="star" />
            FAQs
        </h1>
    </div>
  )
}
