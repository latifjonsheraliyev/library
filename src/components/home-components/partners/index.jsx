import React from 'react'
import './partners.scss'
import netflix from './imges/netflix.png'
import amazon from './imges/amazon.png'
import avon from './imges/avon.png'
import auditeriya from './imges/auditeriya.png'
import dell from './imges/dell.png'

import bottom from './imges/play-video.png'

const Partners = () => {
  return (
        <section className='partners'>
            <div className="container">
                <div className="partners-top">
                    <img src={netflix} alt="" />
                    <img src={amazon} alt="" />
                    <img src={avon} alt="" />
                    <img src={auditeriya} alt="" />
                </div>

                <div className="partners-bottom">
                    <img src={bottom} alt="bottom" />
                    <div className='partners-right'>
                        <div className='flex flex-col '>
                            <h4>Eжедневное преимущество!</h4>
                            <p>Даже полтора часа в день (в среднем столько занимает время на дорогу в мегаполисе на работу и домой), посвященных аудиочтению!</p>
                        </div>
                        <button>Получить скидку</button>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default Partners