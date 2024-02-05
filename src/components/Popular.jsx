import React from 'react'
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Popular = () => {
  return (
    <section className='popular'>
        <div className='container'>
            <p className='subtitle popular__subtitle'>по версии отдыхающих</p>
            <div className='popular__title'>
                <h2>Популярные направления</h2>
            </div>
            <div className='popular__slider'>
                <div className='slider'>
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
                            <div className='popular-card'>
                                <div className='card__photo'>
                                    <img src='direction1.jpg' alt='popular'/>
                                </div>
                                <div className='card__description'>
                                    <div className='card__rating'>
                                        <img src='star.svg' alt='star'/>
                                        <p>4.9</p>
                                    </div>
                                    <div className='card__category'>
                                        <div className='card__visible'>
                                            <div>
                                                <p className='card__title'>Озеро возле гор</p>
                                                <p className='card__text'>романтическое приключение</p>
                                            </div>
                                            <div className='card__price'>
                                                <p>480$</p>
                                            </div>
                                        </div>
                                        <div className='card__hidden'>
                                            <p>
                                                Его корни уходят в один фрагмент классической латыни 
                                                45 года н.э., то есть более двух тысячелетий назад. 
                                                Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                                                 штат Вирджиния, взял одно из самых &nbsp;странных слов в 
                                                 Lorem Ipsum, "consectetur"и занялся его поисками в 
                                                 классической латинской литературе.
                                            </p>
                                            <button>Программа тура</button>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='popular-card'>
                                <div className='card__photo'>
                                    <img src='direction2.jpg' alt='popular'/>
                                </div>
                                <div className='card__description'>
                                    <div className='card__rating'>
                                        <img src='star.svg' alt='star'/>
                                        <p>4.9</p>
                                    </div>
                                    <div className='card__category'>
                                        <div className='card__visible'>
                                        <div>
                                            <p className='card__title'>Ночь в горах</p>
                                            <p className='card__text'>в компании друзей</p>
                                        </div>
                                        <div className='card__price'>
                                            <p>480$</p>
                                        </div>
                                        </div>
                                        <div className='card__hidden'>
                                            <p>
                                                Его корни уходят в один фрагмент классической латыни 
                                                45 года н.э., то есть более двух тысячелетий назад. 
                                                Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                                                 штат Вирджиния, взял одно из самых &nbsp;странных слов в 
                                                 Lorem Ipsum, "consectetur"и занялся его поисками в 
                                                 классической латинской литературе.
                                            </p>
                                            <button>Программа тура</button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='popular-card'>
                                <div className='card__photo'>
                                    <img src='direction3.jpg' alt='popular'/>
                                </div>
                                <div className='card__description'>
                                    <div className='card__rating'>
                                        <img src='star.svg' alt='star'/>
                                        <p>4.9</p>
                                    </div>
                                    <div className='card__category'>
                                        <div className='card__visible'>
                                        <div>
                                            <p className='card__title'>Йога в горах</p>
                                            <p className='card__text'>для тех, кто заботится о себе</p>
                                        </div>
                                        <div className='card__price'>
                                            <p>480$</p>
                                        </div>
                                        </div>
                                        <div className='card__hidden'>
                                            <p>
                                                Его корни уходят в один фрагмент классической латыни 
                                                45 года н.э., то есть более двух тысячелетий назад. 
                                                Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                                                 штат Вирджиния, взял одно из самых &nbsp;странных слов в 
                                                 Lorem Ipsum, "consectetur"и занялся его поисками в 
                                                 классической латинской литературе.
                                            </p>
                                            <button>Программа тура</button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='popular__btn'>
                <button>Рейтинг направлений</button>
            </div>
        </div>
    </section>
  )
}

export default Popular






// import React from 'react'
// import 'swiper/scss';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const Popular = () => {
//   return (
//     <section className='popular'>
//         <div className='container'>
//             <p className='subtitle popular__subtitle'>по версии отдыхающих</p>
//             <div className='popular__title'>
//                 <h2>Популярные направления</h2>
//             </div>
//             <div className='popular__slider'>
//                 <div className='slider'>
//                     <Swiper
//                         slidesPerView={1}
//                         spaceBetween={20}
//                         loop={true}   
//                         freeMode={true}   
//                         breakpoints={{
//                             600: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                             },
//                             920: {
//                             slidesPerView: 2,
//                             spaceBetween: 20,
//                             },
//                             1200: {
//                             slidesPerView: 3,
//                             spaceBetween: 20,
//                             },
//                         }}                   
//                         className="mySwiper"
//                     >
//                         <SwiperSlide>
//                             <div className='popular-card'>
//                                 <div className='card__photo'>
//                                     <img src='direction1.jpg' alt='popular'/>
//                                 </div>
//                                 <div className='card__description'>
//                                     <div className='card__rating'>
//                                         <img src='star.svg' alt='star'/>
//                                         <p>4.9</p>
//                                     </div>
//                                     <div className='card__category'>
//                                         <div>
//                                             <p className='card__title'>Озеро возле гор</p>
//                                             <p className='card__text'>романтическое приключение</p>
//                                         </div>
//                                         <div className='card__price'>
//                                             <p>480$</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className='popular-card'>
//                                 <div className='card__photo'>
//                                     <img src='direction2.jpg' alt='popular'/>
//                                 </div>
//                                 <div className='card__description'>
//                                     <div className='card__rating'>
//                                         <img src='star.svg' alt='star'/>
//                                         <p>4.9</p>
//                                     </div>
//                                     <div className='card__category'>
//                                         <div>
//                                             <p className='card__title'>Ночь в горах</p>
//                                             <p className='card__text'>в компании друзей</p>
//                                         </div>
//                                         <div className='card__price'>
//                                             <p>480$</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className='popular-card'>
//                                 <div className='card__photo'>
//                                     <img src='direction3.jpg' alt='popular'/>
//                                 </div>
//                                 <div className='card__description'>
//                                     <div className='card__rating'>
//                                         <img src='star.svg' alt='star'/>
//                                         <p>4.9</p>
//                                     </div>
//                                     <div className='card__category'>
//                                         <div>
//                                             <p className='card__title'>Йога в горах</p>
//                                             <p className='card__text'>для тех, кто заботится о себе</p>
//                                         </div>
//                                         <div className='card__price'>
//                                             <p>480$</p>
//                                         </div>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//             <div className='popular__btn'>
//                 <button>Рейтинг направлений</button>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Popular