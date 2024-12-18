import React from 'react'
import './collections.scss'
const Collections = () => {
  return (
        <section className='collections'>
            <div className='container'>
                <div className="collections-top">
                    <h5>Подборки</h5>
                </div>
                <div className="collections-bottom">
                        <div className="collection-card">
                            <h6>В дороге</h6>
                        </div>
                        <div className="collection-card">
                            <h6>Для отдыха</h6>
                        </div>

                        <div className="collection-card">
                            <h6>Для учебы</h6>
                        </div>

                        <div className="collection-card">
                            <h6>Для работы</h6>
                        </div>
                </div>
            </div>
        </section>
  )
}

export default Collections