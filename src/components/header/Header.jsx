import React from 'react'

//styles
import './header.css'

//images
import logoheader from '../../assets/img/logopb-white.svg';
import iconDownArrow from '../../assets/img/down-arrow.svg'

function Header() {
    return (
        <div className="header">
            <img src={logoheader} alt="" />
            <div className="content-header">
                <span>Carlos Ortiz</span>
                <img src={iconDownArrow} alt="" />
            </div>
        </div>
    )
}

export default Header
