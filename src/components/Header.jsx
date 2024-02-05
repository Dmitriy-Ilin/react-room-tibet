import React from 'react'
import MobileHeader from './MobileHeader'

const Header = ({isActive, setIsActive}) => {
  return (
    <>
    <header className='header'>
        <div className='container'>
            <div className='header__top'>
                <a href='#!'><img src='logo.jpg' alt='logo'/></a>
                <div className='header__nav'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li>
                                <a href='#!'>Главная</a>
                            </li>
                            <li>
                                <a href='#!'>Про гида</a>
                            </li>
                            <li>
                                <a href='#!'>Программа тура</a>
                            </li>
                            <li>
                                <a href='#!'>Стоимость</a>
                            </li>
                            <li>
                                <a href='#!'>Блог</a>
                            </li>
                            <li>
                                <a href='#!'>Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header__nav-btn'>
                    <button className='nav-btn'>Консультация</button>
                </div>
                <button className='header__burger' onClick={() => setIsActive(!isActive)}>
                    <img src='menu.svg'/>
                </button>           
            </div>
            <div className='header__title'>
                <h1>Насладись прогулкой в горах <br/>с командой единомышленников</h1>
            </div>
            <div className='header__footer'>
                <form className='header-form'>
                    <div className='form-element'>
                        <div className='select-wrapper'>
                            <select 
                                name='select-country'
                                defaultValue='default'>
                                <option style={{backgroundColor: '#FDFDFD'}} value='default' disabled>Локация для тура</option>
                                <option style={{backgroundColor: '#FDFDFD'}} value='usa'>США</option>
                                <option style={{backgroundColor: '#FDFDFD'}} value='uk'>Великобритания</option>
                                <option style={{backgroundColor: '#FDFDFD'}} value='russia'>Россия</option>
                            </select>
                        </div>
                        <p>выберите из списка</p>
                    </div> 
                    <div className='form-element'>
                        <input type='date'/>
                        <input type='date'/>
                        <p>укажите диапазон</p>
                    </div>        
                    <div className='form-element'>
                        <div className='select-wrapper'>
                            <select 
                                name='select-number'
                                defaultValue='default'>
                                <option value='default' disabled>Участники</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                            </select>
                        </div>
                        <p>минимум 4 человека</p>
                    </div> 
                    <div className='form-btn'>
                        <button>Найти программу</button>
                    </div> 
                </form>
                <button className='mobile-form-btn'>
                    Найти программу
                </button>
            </div>
        </div>
    </header>
    <MobileHeader isActive={isActive} setIsActive={setIsActive}/>
    </>
  )
}

export default Header



// import React, { useEffect, useState } from 'react'

// const Header = () => {
//   const [activeIndex, setActiveInder] = useState('');
  
//   useEffect(() => {
//     document.querySelector('.dropdown__btn').addEventListener('click', function() {
//         document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible')
//     })
//   }, [])

//   useEffect(() => {
//     document.querySelectorAll('.dropdown__list-item').forEach(function(item) {
//         item.addEventListener('click', function() {
//             document.querySelector('.dropdown__btn').innerHTML = this.innerHTML;
//         })
//     })
//   }, [])

//   return (
//     <header className='header'>
//         <div className='container'>
//             <div className='header__top'>
//                 <a href='#!'><img src='logo.jpg' alt='logo'/></a>
//                 <div className='header__nav'>
//                     <nav className='nav'>
//                         <ul className='nav__list'>
//                             <li>
//                                 <a href='#!'>Главная</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Про гида</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Программа тура</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Стоимость</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Блог</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Контакты</a>
//                             </li>

//                         </ul>
//                     </nav>
//                 </div>
//                 <div className='header__nav-btn'>
//                     <button className='nav-btn'>Консультация</button>
//                 </div>
//             </div>
//             <div className='header__title'>
//                 <h1>Насладись прогулкой в горах <br/>с командой единомышленников</h1>
//             </div>
//             <div className='header__footer'>
//                 <form className='header-form' onSubmit={e => e.preventDefault()}>
//                     <div className='form-element'>
//                         <div className='dropdown'>
//                             <button className='dropdown__btn'>
//                                 Локация для тура
//                             </button>
                            
//                             <ul className='dropdown__list'>
//                                 <li className='dropdown__list-item' disabled>Локация для тура</li>
//                                 <li className='dropdown__list-item'>Великобритания</li>
//                                 <li className='dropdown__list-item'>США</li>
//                                 <li className='dropdown__list-item'>Россия</li>
//                             </ul>
                        
//                             <p>выберите из списка</p>
//                         </div>              
//                     </div> 
//                     <div className='form-element'>
//                         <input type='date'/>
//                         <input type='date'/>
//                         <p>укажите диапазон</p>
//                     </div>        
//                     <div className='form-element'>
//                         <div className='dropdown'>
//                             <button className='dropdown__btn'>Участники</button>
//                             <ul className='dropdown__list'>
//                                 <li className='dropdown__list-item' disabled>Участники</li>
//                                 <li className='dropdown__list-item'>4</li>
//                                 <li className='dropdown__list-item'>5</li>
//                                 <li className='dropdown__list-item'>6</li>
//                             </ul>
//                             <p>минимум 4 человека</p>
//                         </div>
//                     </div> 
//                     <div className='form-btn'>
//                         <button>Найти программу</button>
//                     </div> 
//                 </form>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Header



// import React, { useState } from 'react'

// const Header = () => {
//   const [activeIndex, setActiveInder] = useState('');
//   const countryOption = [
//     {value: 'Локация для тура', label: 'value1'},
//     {value: 'Великобритания', label: 'value2'},
//     {value: 'США', label: 'value3'},
//     {value: 'Россия', label: 'value4'},
//   ]

//   return (
//     <header className='header' onClick={() => setActiveInder('')}>
//         <div className='container'>
//             <div className='header__top'>
//                 <a href='#!'><img src='logo.jpg' alt='logo'/></a>
//                 <div className='header__nav'>
//                     <nav className='nav'>
//                         <ul className='nav__list'>
//                             <li>
//                                 <a href='#!'>Главная</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Про гида</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Программа тура</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Стоимость</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Блог</a>
//                             </li>
//                             <li>
//                                 <a href='#!'>Контакты</a>
//                             </li>

//                         </ul>
//                     </nav>
//                 </div>
//                 <div className='header__nav-btn'>
//                     <button className='nav-btn'>Консультация</button>
//                 </div>
//             </div>
//             <div className='header__title'>
//                 <h1>Насладись прогулкой в горах <br/>с командой единомышленников</h1>
//             </div>
//             <div className='header__footer'>
//                 <form className='header-form' onSubmit={e => e.preventDefault()}>
//                     <div className='form-element'>
//                         <div className='dropdown'>
//                             <button className='dropdown__btn' onClick={(e) => {
//                                 e.stopPropagation()
//                                 setActiveInder(0)}}
//                             >
//                                 Локация для тура
//                             </button>
//                             {activeIndex === 0 ? (
//                             <ul className='dropdown__list'>
//                                 <li className='dropdown__list-item' disabled>Локация для тура</li>
//                                 <li className='dropdown__list-item'>Великобритания</li>
//                                 <li className='dropdown__list-item'>США</li>
//                                 <li className='dropdown__list-item'>Россия</li>
//                             </ul>
//                             ): null}
                           
//                             <p>выберите из списка</p>
//                         </div>              
//                     </div> 
//                     <div className='form-element'>
//                         <input type='date'/>
//                         <input type='date'/>
//                         <p>укажите диапазон</p>
//                     </div>        
//                     <div className='form-element'>
//                         <div className='dropdown'>
//                             <button className='dropdown__btn'>Участники</button>
//                             <ul className='dropdown__list'>
//                                 <li className='dropdown__list-item' disabled>Участники</li>
//                                 <li className='dropdown__list-item'>4</li>
//                                 <li className='dropdown__list-item'>5</li>
//                                 <li className='dropdown__list-item'>6</li>
//                             </ul>
//                             <p>минимум 4 человека</p>
//                         </div>
//                     </div> 
//                     <div className='form-btn'>
//                         <button>Найти программу</button>
//                     </div> 
//                 </form>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Header


