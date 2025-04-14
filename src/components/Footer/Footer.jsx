import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logo from '../Navbar/logo.png';

const Footer = () => {

    const [menu, setMenu] = useState("General");

    return (
        <div className="footer">
            <div className='content-wrap'>
                <div className="footer-grid ">
                    <div className="footer-grid-item">
                        <div className="nav-logo">
                            <img className='img-logo' src={logo} alt="logo"/>
                            <p>"АртЭль" СЛІПОГО ЗБРОЯРА</p>
                        </div>
                    </div>
                    <div className="footer-grid-item">
                        <div className="footer-grid-item-title">Меню</div>
                        <ul className="nav-menu">
                            <li onClick={() => {
                                setMenu('General')
                            }}><Link to='/'>Головна{menu === 'General' ? <hr/> : <></>}</Link></li>
                            <li onClick={() => {
                                setMenu('Keychain')
                            }}><Link to='/Keychain'>Брелкі{menu === 'Keychain' ? <hr/> : <></>}</Link></li>
                            <li onClick={() => {
                                setMenu('Pen')
                            }}><Link to='/Pen'>Ручки{menu === 'Pen' ? <hr/> : <></>}</Link></li>
                            <li onClick={() => {
                                setMenu('Candle_holders')
                            }}><Link to='/Candle_holders'>Підсвічники{menu === 'Candle_holders' ? <hr/> : <></>}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-grid-item">
                        <div className="footer-grid-item-title">Продажі - замовлення</div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="tel:+380674646146">067-464-61-46</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-grid-item">
                        <div className="footer-grid-item-title">Слідкуйте за нами</div>
                        <div className="footer-grid-item-content">
                            <a href="https://facebook.com">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;