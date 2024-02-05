import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActive } from '../store/gallerySlice';
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Gallery = () => {
  const gallery = useSelector(state => state.gallery);
  const dispatch = useDispatch();

  return (
    <section className='gallery'>
        <div className='container'>
            <p className='subtitle gallery-subtitle'>фото-отчет</p>
            <h2 className='gallery__title'>Делимся впечатлениями</h2>
            <div className='gallery-wrapper'>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(1))}>
                    <img src='gallery.png' alt='gallery'/>
                </div>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(2))}>
                    <img src='gallery2.png' alt='gallery'/>
                </div>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(3))}>
                    <img src='gallery3.png' alt='gallery'/>
                </div>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(4))}>
                    <img src='gallery4.png' alt='gallery'/>
                </div>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(5))}>
                    <img src='gallery5.png' alt='gallery'/>
                </div>
                <div className='gallery__item' onClick={() => dispatch(toggleActive(6))}>
                    <img src='gallery6.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[0].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(1))}>&times;</span>
                    <img src='gallery.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[1].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(2))}>&times;</span>
                    <img src='gallery2.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[2].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(3))}>&times;</span>
                    <img src='gallery3.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[3].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(4))}>&times;</span>
                    <img src='gallery4.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[4].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(5))}>&times;</span>
                    <img src='gallery5.png' alt='gallery'/>
                </div>
                <div className={`gallery__popup ${gallery[5].active ? 'active' : 'hidden'}`}>
                    <span onClick={() => dispatch(toggleActive(6))}>&times;</span>
                    <img src='gallery6.png' alt='gallery'/>
                </div>
            </div>
            <div className='gallery-hidden'>
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
                        <div className='gallery__item'>
                            <img src='gallery.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='gallery__item'>
                            <img src='gallery2.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='gallery__item'>
                            <img src='gallery3.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='gallery__item'>
                            <img src='gallery4.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='gallery__item'>
                            <img src='gallery5.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='gallery__item'>
                            <img src='gallery6.png' alt='gallery'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='gallery__btn'>
                <button>Наш pinterest</button>
            </div>
        </div>
    </section>
  )
}

export default Gallery



// import React, { useState } from 'react'

// const Gallery = () => {
//   const [obj, setObj] = useState([
//     {id: 1, active: false},
//     {id: 2, active: false},
//     {id: 3, active: false},
//     {id: 4, active: false},
//     {id: 5, active: false},
//     {id: 6, active: false},
//   ])

//   const handlePopupClick1 = (id) => {
//     setObj(obj.map(item => {
//         if (item.id !== id) return item
//         return {
//             ...item,
//             active: !item.active
//         }
//     }));
//   }

//   return (
//     <section className='gallery'>
//         <div className='container'>
//             <p className='subtitle gallery-subtitle'>фото-отчет</p>
//             <h2 className='gallery__title'>Делимся впечатлениями</h2>
//             <div className='gallery-wrapper'>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(1)}>
//                     <img src='gallery.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(2)}>
//                     <img src='gallery2.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(3)}>
//                     <img src='gallery3.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(4)}>
//                     <img src='gallery4.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(5)}>
//                     <img src='gallery5.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item' onClick={() => handlePopupClick1(6)}>
//                     <img src='gallery6.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[0].active ? 'active' : 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(1)}>&times;</span>
//                     <img src='gallery.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[1].active ? 'active': 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(2)}>&times;</span>
//                     <img src='gallery2.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[2].active ? 'active': 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(3)}>&times;</span>
//                     <img src='gallery3.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[3].active ? 'active': 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(4)}>&times;</span>
//                     <img src='gallery4.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[4].active ? 'active': 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(5)}>&times;</span>
//                     <img src='gallery5.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${obj[5].active ? 'active': 'hidden'}`}>
//                     <span onClick={() => handlePopupClick1(6)}>&times;</span>
//                     <img src='gallery6.png' alt='gallery'/>
//                 </div>
//             </div>
//             <div className='gallery__btn'>
//                 <button>Наш pinterest</button>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Gallery



// import React, { useState } from 'react'

// const Gallery = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [obj, setObj] = useState([
//     {id: 1, active: false},
//     {id: 2, active: false},
//     {id: 3, active: false},
//     {id: 4, active: false},
//     {id: 5, active: false},
//     {id: 6, active: false},
//   ])

//   const handlePopupClick1 = (id) => {
//     setObj(obj.map(item => {
//         if (item.id !== id) return item
//         return {
//             ...item,
//             active: !item.active
//         }
//     }));
//   }

//   const handlePopupClick = () => {
//     setIsActive(!isActive);
//   }

//   return (
//     <section className='gallery'>
//         <div className='container'>
//             <p className='subtitle gallery-subtitle'>фото-отчет</p>
//             <h2 className='gallery__title'>Делимся впечатлениями</h2>
//             <div className='gallery-wrapper'>
//                 <div className='gallery__item' onClick={handlePopupClick}>
//                     <img src='gallery.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item'>
//                     <img src='gallery2.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item'>
//                     <img src='gallery3.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item'>
//                     <img src='gallery4.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item'>
//                     <img src='gallery5.png' alt='gallery'/>
//                 </div>
//                 <div className='gallery__item'>
//                     <img src='gallery6.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery2.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery3.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery4.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery5.png' alt='gallery'/>
//                 </div>
//                 <div className={`gallery__popup ${isActive ? 'active': 'hidden'}`}>
//                     <span onClick={handlePopupClick}>&times;</span>
//                     <img src='gallery6.png' alt='gallery'/>
//                 </div>
//             </div>
//             <div className='gallery__btn'>
//                 <button>Наш pinterest</button>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Gallery