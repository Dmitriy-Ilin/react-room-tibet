import React from 'react'

const Programms = () => {
  return (
    <section className='programms'>
        <div className='container'>
            <div className='programms-wrapper'>
                <div className='programms__left'>
                    <p className='subtitle'>наше предложение</p>
                    <div className='programms__title'>
                        <h2 >Лучшие предложения для тебя</h2>
                    </div>         
                    <div className='programms__text'>
                        <p>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                            то есть более двух тысячелетий назад.
                            Ричард МакКлинток, профессор латыни из колледжа.
                        </p>
                    </div>            
                     <div className='programms__blocks'>
                        <div className='programms__item'>
                            <img src='frame3.svg' alt='program2'/>
                            <div>
                                <h3 className='programms__item-title'>Опытный гид</h3>
                                <p className='programms__item-text'>
                                    Для современного мира 
                                    базовый вектор развития предполагает независимые способы 
                                    реализации соответствующих условий активизации.
                                </p>
                            </div>      
                        </div>
                        <div className='programms__item'>
                            <img src='frame2.svg' alt='program1'/>
                            <div>
                                <h3 className='programms__item-title'>Безопасный поход</h3>
                                <p className='programms__item-text'>
                                    Для современного мира 
                                    базовый вектор развития предполагает независимые способы 
                                    реализации соответствующих условий активизации.
                                </p>
                            </div>
                        </div>
                        <div className='programms__item'>
                            <img src='frame1.svg' alt='program3'/>
                            <div>
                                <h3 className='programms__item-title'>Лояльные цены</h3>
                                <p className='programms__item-text'>
                                    Для современного мира 
                                    базовый вектор развития предполагает независимые способы 
                                    реализации соответствующих условий активизации.
                                </p>
                            </div>            
                        </div>
                     </div>
                     <div className='programms__btn'>
                        <button>Стоимость программ</button>
                     </div>
                </div>
                <div className='programms__right'>
                    <div className='programms__right-wrapper'>
                        <img className='programms__right-img' src='travel5.jpg' alt='travel5'/>
                        <img className='programms__right-img' src='travel2.jpg' alt='travel2'/>
                        <img className='programms__right-img' src='travel3.jpg' alt='travel3'/>
                        <img className='programms__right-img' src='travel4.jpg' alt='travel4'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Programms