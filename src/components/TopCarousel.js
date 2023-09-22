import React from "react";
import "../css/TopCarousel.css";
import CarouselItem from "./CarouselItem";
import { useSpringCarousel } from "react-spring-carousel";
import {BsArrowBarLeft,BsArrowBarRight} from 'react-icons/bs'

function TopCarousel() {
  const mockedItems = [
    {
      id: 1,
      img:"https://i.ebayimg.com/images/g/zMgAAOSwstxgzt3q/s-l1600.jpg",
      alt:"1"
    },
    {
      id: 2,
      img:"https://cdn.cdkeys.com/500x706/media/catalog/product/f/i/fifa-22-pc-game-origin-cover_10__1.jpg",
      alt:"2"
    },
    {
      id: 3,
      img:"https://i.pinimg.com/736x/61/8c/f4/618cf4b8046a7c5eded9dfff6fb2c9f4.jpg",
      alt:"3"
    },
    {
      id: 4,
      img:"https://i.pinimg.com/originals/97/b1/b4/97b1b4426307b00866d79e421e8e5bcc.png",
      alt:"4"
    },
    {
      id: 5,
      img:"https://m.media-amazon.com/images/M/MV5BMzU1OGIzOGEtMDQwYi00OTlhLWEyOWEtNGExZDM0OWQzNDJjXkEyXkFqcGdeQXVyNzUwMDg5MDI@._V1_FMjpg_UX1000_.jpg",
      alt:"5"
    },
  ];
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 5,
      withLoop: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem img={i.img} alt={i.alt}>5555656</CarouselItem>,
      })),
    });

  return (
    <div className="carousel-container">
      <button onClick={slideToPrevItem} className="btn-prev"><BsArrowBarLeft/></button>
      {carouselFragment}
      <button onClick={slideToNextItem} className="btn-next"><BsArrowBarRight/></button>
    </div>
  );
}

export default TopCarousel;
