import React from 'react'
import './Shimmer.css'

export default function ShimmerEffect() {
  return (
    <div className='countries-container'>
        
       {
        Array.from({length: 10}).map((el, i) => {
          return <div className='country-card shimmer-card'></div>
        })
       }
    </div>
  )
}
