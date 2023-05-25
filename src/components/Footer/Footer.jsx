import React from 'react'
import { Button } from '../Button/Button'
import CentrmedLogo from '../../icons/CentrmedLogo.svg';
import './footer.css'
import { ReactComponent as Latter } from '../../icons/letter.svg';
const Footer = () => {

    return (<footer className='footer'>
        <div className='footer__logo'>
            <img src={CentrmedLogo} alt="Centrmed Logo" />
            <span>Centrmed</span>
        </div>
        <div className='footer__TechBlock'>
            <span className='footer__text' >Технічні питання ?</span>
            <Button>
                <Latter className='footer__svg' />
                Напишіть нам
            </Button>
        </div>
        <div className="footer__Copyright">Copyright © 2023 CentrMed. All Rights Reserved</div>
    </footer>)
}

export default Footer;