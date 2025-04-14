import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {

    const [menu, setMenu] = useState("General");

    return (
            <div className="navbar">
                <div className='content-wrap'>
                    <div className="nav-logo">
                        <img className='img-logo' src={logo} alt="logo"/>
                        <p>"АртЭль" СЛІПОГО ЗБРОЯРА</p>
                    </div>
                    <ul className="nav-menu">
                        <li onClick={()=>{setMenu('General')}}><Link to='/'>Головна{menu==='General'?<hr/>:<></>}</Link></li>
                        <li onClick={()=>{setMenu('Keychain')}}><Link to='/Keychain'>Брелкі{menu==='Keychain'?<hr/>:<></>}</Link></li>
                        <li onClick={()=>{setMenu('Pen')}}><Link to='/Pen'>Ручки{menu==='Pen'?<hr/>:<></>}</Link></li>
                        <li onClick={()=>{setMenu('Candle_holders')}}><Link to='/Candle_holders'>Підсвічники{menu==='Candle_holders'?<hr/>:<></>}</Link></li>
                    </ul>
                </div>
            </div>
            )
            }

export default Navbar;