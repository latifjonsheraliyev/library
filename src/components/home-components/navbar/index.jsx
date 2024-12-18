import React from 'react'
import './navbar.scss'
import navbar_logo from './imges/navbar-logo.png'
import { IoIosSearch } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
        <section className='navbar'>
            <div className="container">
                <div className="navbar-left">
                    <Link> <img src={navbar_logo} alt="" /> </Link>
                </div>
                <nav className="navbar-center">
                <Link> <h3>Как купить</h3> </Link>
                <Link> <h3>F.A.Q</h3> </Link>
                <Link> <h3>Контакты</h3> </Link>                                                          
                </nav>
                <div className="navbar-right">
                    <button className='search-button'>
                    <IoIosSearch className='text-[30px] text-white' />
                    </button>
                    <button className='registratsiya-button'>
                    Регистрация
                    </button>
                    <button className='login-btn'>
                    Войти
                    </button>
                    <button className='open-bars'>
                        <HiBars3 className='text-[3rem] text-white' />
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Navbar