import React from 'react'
import { Button } from '../../Button/Button'
import CentrmedLogo from '../../../icons/CentrmedLogo.svg';
import './footer.css'
import { ReactComponent as Latter } from '../../../icons/letter.svg';
import { useModal } from 'react-modal-hook';
import ReactModal from 'react-modal';
import { ContactUs } from '../../Modals/ContactUs/ContactUs';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [showAuth, hideAuth] = useModal(() => (
        <ReactModal
            style={{ zIndex: 4 }}
            isOpen
            className="App__modal-content"
            ariaHideApp={false}
        >
            <div onClick={hideAuth} className="react-modal-hook">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <ContactUs hideAuth={hideAuth} />
                </div>
            </div>
        </ReactModal>
    ));


    return (<footer className='footer'>
        <div className='footer__logo'>
            <img src={CentrmedLogo} alt="Centrmed Logo" />
            <span>Centrmed</span>
        </div>
        <div className='footer__TechBlock'>
            <span className='footer__text' >Технічні питання ?</span>
            <Button onClick={showAuth} >
                <Latter className='footer__svg' />
                Напишіть нам
            </Button>
        </div>
        <div className="footer__Copyright">
            <a href={'/docs/PrivacyPolicy'}> Політика конфіденційності</a>
            <a href={'/docs/ContractPaidInformation'}> Договір Оферти</a>
            <a href={'/docs/UserAgreement'}> Користувацька угода</a>
            <div>Copyright © 2023 CentrMed. All Rights Reserved</div>
        </div>
    </footer>)
}

export default Footer;