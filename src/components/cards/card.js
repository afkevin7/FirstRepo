import React from 'react';
import "./style.css";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination,Navigation} from "swiper";

function Card({card}) {
  return (
    <div className='card-box'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            mousewheel={true}
            cssMode={true}
            pagination
            modules={[Pagination,Navigation]}
            className='swiper-container'
            bulletClass={"background-color:#fff;"}
        >
            {card.imgSrc.map((src,i)=>(
            <SwiperSlide key={i}>
            <img 
            src={src}
            alt=''
            style={{
                objectFit:"cover",
                width:"100%",
                height:"300px",
                borderRadius:"1rem"
            }}
            />
            </SwiperSlide>))}
        </Swiper>   
        
        <div className='card-info-flex'>
            <h3 className='card-title'>{card.title}</h3>
            <div style={{marginTop:"0.3rem"}} className='card-rating'>
                <StarRateRoundedIcon />
                <p>{card.rating}</p>
            </div>
        </div>
        <p className='card-des' style={{margin:0 , color:"var(--dfont-grey)"}}>{card.desc}</p>
        <p className='card-des' style={{margin:0,color:"var(--dfont-grey)"}}>{card.date}</p>
        <p className='card-des' style={{margin:"0.2rem",fontSize:"1rem",color:"var(--black)"}}><span style={{fontWeight:"600"}}>{card.price}</span>/night</p>
    </div>
  );
}

export default Card;