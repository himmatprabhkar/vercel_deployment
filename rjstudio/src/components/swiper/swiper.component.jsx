import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper p-5"
      >
        <SwiperSlide>
          <div className="slide-box text-center p-5 d-flex flex-column gap-3">
            <p className="fst-italic">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore “
            </p>
            <div className="clint-img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="https://s3-alpha-sig.figma.com/img/56c3/7246/a1a9171c102bd8b43cf7bbcb4b01e33f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M42nP6puAZVSffJtgmx00dViV67qAs7GkADzCpZAc4RpDNEQrfmc2mdwMvihcAdb0uqhqqy-nX9fRrI8WeluzIA~obYDlyU0A-N2l0E7ClCZBct~kqtXe-Bu9dx-HB03klSEZgE-Rlb-SWmBYfk-7nFuoAUifzMQD0dvwZlbv~JfajNNO66E-7lQ8aahVRBk8FM23GJOhOZ6bsHvPpXjMO-iMJ7h8teoGtGp5-ZODaDWdkjYjvxUZcQkSPWId5Rp1XajP5bQzyBAI~t8ozYx85dP-1NCT0mH41dDB8i7-vcIwq11AtDnMA8tlPh~~5UcO1tV9p0PqvnJGfhsWA8uRQ__"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column gap-1 mt-3">
                <a className="h6 fw-bold text-dark clint-name" href="#">
                  Mr. John Doe
                </a>
                <span className="catg-title">Clients</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box text-center p-5 d-flex flex-column gap-3">
            <p className="fst-italic">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore “
            </p>
            <div className="clint-img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="https://s3-alpha-sig.figma.com/img/646a/8c1c/e3de3e2bbcbe2f4223979aec4f5f4a75?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nx-o5Sj5y3bcIXk3r0Ad09tsy4J5sBNqKkutp43NOTngQH6xVRH0RV0F~w5Q055XyaHDqYsh-EztlMVKVEX-JiAqcGB8w1sSZHQcI3ubJ-~clVuePCHANGlyMNv5rQUWlJ0YPp5c5WiW3H85cDwzehYaw0K0opbGhdSGU3DFyqKPq-k74LvJr3TjsNHgRoU9TTVA03vHkxiy7OuioX1YOpxgy8W7nrnTSlNwhohBEUF~OZHahR3OXMbOxmQdxojwnbCOX5tS~euFO2Vy-JqOi8~Owa1QW7g8vQFPJzDZeP556wHtxK-k2sm4-YVLnKyk6COdDa1w2kHS0G~zcAuQvQ__"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column gap-1 mt-3">
                <a className="h6 fw-bold text-dark clint-name" href="#">
                  Mr. John Doe
                </a>
                <span className="catg-title">Clients</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box text-center p-5 d-flex flex-column gap-3">
            <p className="fst-italic">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore “
            </p>
            <div className="clint-img">
              <a href="#">
                <img
                  className="img-fluid"
                  src="https://s3-alpha-sig.figma.com/img/56c3/7246/a1a9171c102bd8b43cf7bbcb4b01e33f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M42nP6puAZVSffJtgmx00dViV67qAs7GkADzCpZAc4RpDNEQrfmc2mdwMvihcAdb0uqhqqy-nX9fRrI8WeluzIA~obYDlyU0A-N2l0E7ClCZBct~kqtXe-Bu9dx-HB03klSEZgE-Rlb-SWmBYfk-7nFuoAUifzMQD0dvwZlbv~JfajNNO66E-7lQ8aahVRBk8FM23GJOhOZ6bsHvPpXjMO-iMJ7h8teoGtGp5-ZODaDWdkjYjvxUZcQkSPWId5Rp1XajP5bQzyBAI~t8ozYx85dP-1NCT0mH41dDB8i7-vcIwq11AtDnMA8tlPh~~5UcO1tV9p0PqvnJGfhsWA8uRQ__"
                  alt=""
                />
              </a>
              <div className="d-flex flex-column gap-1 mt-3">
                <a className="h6 fw-bold text-dark clint-name" href="#">
                  Mr. John Doe
                </a>
                <span className="catg-title">Clients</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
