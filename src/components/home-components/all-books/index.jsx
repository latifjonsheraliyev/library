import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// import scss
import './allbooks.scss'
// imges
import book1 from "./imges/book1.png";
import { IoMdHeartEmpty } from "react-icons/io";

const AllBooks = () => {
  return (
    <section className="new-books">
      <div className="container">
        <div className="new-books-top flex items-center  !justify-start all-books-top">
          <h3>Новинки </h3>
          <h3 className="!text-[#ec8f32]">Популярное</h3>
          <h3 className="!text-[#ec8f32]">Выбор редакции</h3>
                 
        </div>
        <div className="new-books-bottom">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
        
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="new-books-card">
                <button className=" like-btn text-[30px] text-black">
                  <IoMdHeartEmpty />
                </button>
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                    <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="new-books-bottom">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
        
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="new-books-card">
                <button className=" like-btn text-[30px] text-black">
                  <IoMdHeartEmpty />
                </button>
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                    <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="new-books-card">
                <img src={book1} alt="" />
                <div className="new-card-descrip">
                  <p>Ульяна Соболева</p>
                  <h6>Завтра будет вчера</h6>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
