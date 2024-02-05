import React from 'react'

const Video = () => {
  return (
    <section className='video'>
        <div className='container'>
            <div className='video-wrapper'>
                <div className='video__left'>
                    <div className='video__left-img'>
                        <img className='left-img' src='video1.jpg' alt='video'/>
                    </div>
                    <div className='video__right-img'>
                        <img className='right-img' src='video2.jpg' alt='video'/>
                    </div>
                </div>
                <div className='video__right'>
                    <p className='subtitle'>О нашем походе</p>
                    <div className='video__title'>
                        <h2>Исследуйте все горные массивы мира вместе с нами</h2>
                    </div>  
                    <div className='video__text'>
                        <p>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                            то есть более двух тысячелетий назад. Ричард МакКлинток, 
                            профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, 
                            взял одно из самых странных слов в Lorem Ipsum, "consectetur" и
                            занялся его поисками в классической латинской литературе.
                        </p>
                    </div> 
                    <div className='video__btn'>
                        <button >Программа тура</button>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Video