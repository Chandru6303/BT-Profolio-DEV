import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Fourth.scss"

const Fourth = (props) =>{
    const data = props.data?.College1;
    return(
        <div className="Fourth">
            <h1>Learning in Action than thinking about it</h1>
            <div className="Swiper-wrapper">
            {/* <h2>In the below institutions we are doing long run programs not an one or two days events. For detailed event list check our Instagram page.</h2> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                    {
                        (data)?.map((elem)=>            
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slideImg">
                                    <img src={elem.img.filename} alt="1" />
                                </div>
                                <h3>{elem.subHead}</h3>
                                <h2>{elem.head}</h2>
                            </div>
                        </SwiperSlide>
                        )
                    }
            </Swiper>
            </div>
        </div>
    )
}

export default Fourth