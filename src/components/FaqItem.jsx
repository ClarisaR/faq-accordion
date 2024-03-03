
import React, { useState } from 'react'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'

export default function FaqItem(props) {
    const { item, setItemVisible, isVisible } = props

    function handleClick() {
        if(isVisible){
            setItemVisible(null)
        }else{
            setItemVisible(item.id)
        }
    }
    return (
        <div>
            <div className='title-item'>
                <h4>{item.title}</h4>
                <span onClick={handleClick}><img src={isVisible ? iconMinus : iconPlus} alt="icon" /></span>
            </div>
            {
                <p className={`item-description ${isVisible ? 'visible' : ''}`}>{item.description}</p>
            }

        </div>
    )
}
