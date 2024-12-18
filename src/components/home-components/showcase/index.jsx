import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination ,Autoplay } from "swiper/modules";
import "swiper/css/autoplay"; // Autoplay style (optional)
// import css
import './showcase.scss'


const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}
          modules={[Pagination ,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="showcase-item">
                <div className="showcase-left">
                    <h2>Книги, которые <br />
                    вам хочется слушать</h2>
                    <h3>Лучшая подборка аудиокниг по психологиии <br /> саморазвитию за все годы издательства...</h3>

                 </div>
                <div className="showcase-right">
                    <button className="select-books">
                    Выбрать книгу
                    </button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="showcase-item">
                <div className="showcase-left">
                    <h2>Книги, которые <br />
                    вам хочется слушать</h2>
                    <h3>Лучшая подборка аудиокниг по психологиии <br /> саморазвитию за все годы издательства...</h3>

                 </div>
                <div className="showcase-right">
                    <button className="select-books">
                    купить книгу
                    </button>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="showcase-item">
                <div className="showcase-left">
                    <h2>Книги, которые <br />
                    вам хочется слушать</h2>
                    <h3>Лучшая подборка аудиокниг по психологиии <br /> саморазвитию за все годы издательства...</h3>

                 </div>
                <div className="showcase-right">
                    <button className="select-books">
                    Выбрать книгу
                    </button>
                </div>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
