import React from 'react'
import './info.scss'
import volume from './imges/volume.svg'
import calendar from './imges/calendar.svg'
import book from './imges/book.svg'
import music from './imges/music.svg'

const InfoComponent = () => {
  return (
        <section className='info'>
            <div className="container">

                <div className="info-item">
                    <img src={volume} alt="ovoz" />
                    <p>Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.</p>
                </div>
                <div className="info-item">
                    <img src={calendar} alt="ovoz" />
                    <p>Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.</p>
                </div>

                <div className="info-item">
                    <img src={music} alt="ovoz" />
                    <p>Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.</p>
                </div>

                <div className="info-item">
                    <img src={book} alt="ovoz" />
                    <p>Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.</p>
                </div>


            </div>
        </section>
  )
}

export default InfoComponent