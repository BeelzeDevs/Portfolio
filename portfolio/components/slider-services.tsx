"use client"

import { serviceData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderServices = () => {
    return (  
        <Swiper
        breakpoints={{
            320:{
                slidesPerView:1,
                spaceBetween:15
            },
            768:{
                slidesPerView:1,
                spaceBetween:15
            },
            1024:{
                slidesPerView:2,
                spaceBetween:15
            },
            1280:{
                slidesPerView:3,
                spaceBetween:15
            },
        }}
        freeMode={true}
        pagination={{
            clickable:true
        }}
        modules={[Pagination]}
        className="h-[280px] md:h-[340px] xl:h-[400px] w-[270px] md:max-w-md lg:w-[600px] xl:max-w-2xl"
        >
            {serviceData.map((item,index)=>(
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-auto md:h-[290px] xl:h-[350px] rounded-lg
                    cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0
                    group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-secondary">
                            {item.icon}
                        </div>
                        <div >
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm ">{item.description}</p>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
 
export default SliderServices;