import React from 'react'
import '../css/TopCarousel.css'

function CarouselItem(props) {
  return (
    <div className='carousel-item'><img src={props.img} alt={props.alt} style={{}}></img></div>
  )
}

export default CarouselItem