import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg"
import Customer2 from "../../assets/customer2.jpg"
import Customer3 from "../../assets/customer3.jpg"
import Customer4 from "../../assets/customer4.jpg"
import Customer5 from "../../assets/customer5.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: "1",
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 5,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1
  },
  {
    id: "2",
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2
  },
  {
    id: "3",
    name: "Alya Zahra",
    profession: "Model",
    rating: 4,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3
  },
  {
    id: "4",
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4
  },
  {
    id: "5",
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5
  }
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customers " heading="Saying" />
        
        {/* Custom Navigation Buttons */}
        <div className="py-5 mt-5 flex justify-end gap-x-3">
          <button
            className="custome-prev text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center
            text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-all"
          >
            <IoIosArrowBack />
          </button>
          <button
            className="custome-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center
            text-zinc-800 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-all"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
          navigation={{ nextEl: ".custome-next", prevEl: ".custome-prev" }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 }
          }}
          modules={[Navigation]} 
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8">
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full bg-orange-500 outline-2 outline-offset-4 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span className="flex text-yellow-400 mt-3 gap-2 text-xl">
                    {/* Render stars based on rating */}
                    {Array.from({ length: Number(item.rating) }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>
              </div>
              <div className="mt-10 min-h-[120px]">
                <p className="text-zinc-600 leading-relaxed">{item.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;