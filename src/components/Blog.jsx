import React from 'react'
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Blog = () => {
  return (
    <section className='blog'>
        <div className='container'>
            <p className='subtitle blog__subtitle'>делимся впечатлениями</p>
            <h2 className='blog__title'>Блог о путешествиях</h2>
            <div className='blog__wrapper'>
                <div className='blog__item'>
                    <img src='blog1.jpg' alt='blog'/>
                    <div className='blog__item-wrapper'>
                        <h3>
                            <a 
                                href='#!'
                                className='blog__item-title'
                            >
                                Красивая Италия, какая она в реальности?
                            </a>   
                        </h3>
                        <p className='blog__item__text'>
                            Для современного мира базовый вектор развития 
                            предполагает независимые способы реализации 
                            соответствующих условий активизации.
                        </p>
                        <div className='blog__item-bottom'>
                            <p className='blog__item-date'>01.04.2023</p>
                            <a className='blog__item-link'>читать статью</a>
                        </div>
                    </div>
                </div>
                <div className='blog__item'>
                    <img src='blog2.jpg' alt='blog'/>
                    <div className='blog__item-wrapper'>
                        <h3>
                            <a 
                                href='#!'
                                className='blog__item-title'
                            >
                                Долой сомнения! Весь мир открыт для вас!
                            </a>   
                        </h3>
                        <p className='blog__item__text'>
                            Для современного мира базовый вектор развития 
                            предполагает независимые способы реализации 
                            соответствующих условий активизации.
                        </p>
                        <div className='blog__item-bottom'>
                            <p className='blog__item-date'>01.04.2023</p>
                            <a className='blog__item-link'>читать статью</a>
                        </div>
                    </div>
                </div>
                <div className='blog__item'>
                    <img src='blog3.jpg' alt='blog'/>
                    <div className='blog__item-wrapper'>
                        <h3>
                            <a
                                className='blog__item-title'
                                href='#!'>
                                Как подготовиться к путешествию в одиночку?
                            </a>   
                        </h3>
                        <p className='blog__item__text'>
                            Для современного мира базовый вектор развития 
                            предполагает независимые способы реализации 
                            соответствующих условий активизации.
                        </p>
                        <div className='blog__item-bottom'>
                            <p className='blog__item-date'>01.04.2023</p>
                            <a className='blog__item-link'>читать статью</a>
                        </div>
                    </div>
                </div>
                <div className='blog__item'>
                    <img src='blog4.jpg' alt='blog'/>
                    <div className='blog__item-wrapper'>
                        <h3>
                            <a 
                                className='blog__item-title'
                                href='#!'>
                                Индия ... летим?
                            </a>   
                        </h3>
                        <p className='blog__item__text'>
                            Для современного мира базовый вектор развития 
                            предполагает независимые способы реализации 
                            соответствующих условий активизации.
                        </p>
                        <div className='blog__item-bottom'>
                            <p className='blog__item-date'>01.04.2023</p>
                            <a className='blog__item-link'>читать статью</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog-hidden'>
                <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 10000,
                            // disableOnInteraction: false
                        }}   
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className='blog__item'>
                        <img src='blog1.jpg' alt='blog'/>
                        <div className='blog__item-wrapper'>
                            <h3>
                                <a 
                                    href='#!'
                                    className='blog__item-title'
                                >
                                    Красивая Италия, какая она в реальности?
                                </a>   
                            </h3>
                            <p className='blog__item__text'>
                                Для современного мира базовый вектор развития 
                                предполагает независимые способы реализации 
                                соответствующих условий активизации.
                            </p>
                            </div>
                            <div className='blog__item-bottom'>
                                <p className='blog__item-date'>01.04.2023</p>
                                <a className='blog__item-link'>читать статью</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='blog__item'>
                        <img src='blog2.jpg' alt='blog'/>
                        <div className='blog__item-wrapper'>
                            <h3>
                                <a 
                                    href='#!'
                                    className='blog__item-title'
                                >
                                    Долой сомнения! Весь мир открыт для вас!
                                </a>   
                            </h3>
                            <p className='blog__item__text'>
                                Для современного мира базовый вектор развития 
                                предполагает независимые способы реализации 
                                соответствующих условий активизации.
                            </p>
                            </div>
                            <div className='blog__item-bottom'>
                                <p className='blog__item-date'>01.04.2023</p>
                                <a className='blog__item-link'>читать статью</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='blog__item'>
                        <img src='blog3.jpg' alt='blog'/>
                        <div className='blog__item-wrapper'>
                            <h3>
                                <a
                                    className='blog__item-title'
                                    href='#!'>
                                    Как подготовиться к путешествию в одиночку?
                                </a>   
                            </h3>
                            <p className='blog__item__text'>
                                Для современного мира базовый вектор развития 
                                предполагает независимые способы реализации 
                                соответствующих условий активизации.
                            </p>
                            </div>
                            <div className='blog__item-bottom'>
                                <p className='blog__item-date'>01.04.2023</p>
                                <a className='blog__item-link'>читать статью</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='blog__item'>
                        <img src='blog4.jpg' alt='blog'/>
                        <div className='blog__item-wrapper'>
                            <h3>
                                <a 
                                    className='blog__item-title'
                                    href='#!'>
                                    Индия ... летим?
                                </a>   
                            </h3>
                            <p className='blog__item__text'>
                                Для современного мира базовый вектор развития 
                                предполагает независимые способы реализации 
                                соответствующих условий активизации.
                            </p>
                            </div>
                            <div className='blog__item-bottom'>
                                <p className='blog__item-date'>01.04.2023</p>
                                <a className='blog__item-link'>читать статью</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='blog__btn'>
                <button>Другие материалы</button>
            </div>
        </div>
    </section>
  )
}

export default Blog