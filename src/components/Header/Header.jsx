import React, { useEffect, useState } from 'react'
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import SideBar from '../SideBar/SideBar';
import Auth from '../Modals/Auth/Auth';
import AuthFree from '../Modals/AuthFree/AuthFree';
import './header.css';
import Burger from './../../icons/Burger.svg'
import CentrmedLogo from './../../icons/CentrmedLogo.svg'

function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  const [showAuth, hideAuth] = useModal(() => (
    <ReactModal
      isOpen
      className="App__modal-content"
      ariaHideApp={false}
    >
      <div onClick={hideAuth} className="react-modal-hook">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Auth hideAuth={hideAuth} />
        </div>
      </div>
    </ReactModal>
  ));

  const [showAuthFree, hideAuthFree] = useModal(() => (
    <ReactModal
      isOpen
      className="App__modal-content"
      ariaHideApp={false}
    >
      <div onClick={hideAuthFree} className="react-modal-hook">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <AuthFree hideAuthFree={hideAuthFree} />
        </div>
      </div>
    </ReactModal>
  ));

  function hideModal() {
    hideAuth();
    hideAuthFree();
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        hideModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const user = localStorage.getItem('role')
  return (
    <>
      {console.log(user)}
      <div className='header'>
        <div className='header_block'>
          {
            user &&
            <div className='header_buttonSideMenu' onClick={handleOpenSidebar}><img src={Burger} alt="" /></div>}
          <div className='header_block_red_btn'>Черговий лікар</div>
        </div>
        <div className='header_block'><img src={CentrmedLogo} alt="Logo" /> <span>CentrMed</span></div>
        {!user && <div className='header_block'><div onClick={showAuth} style={{ 'marginRight': '20px' }}>Авторизація</div><div onClick={showAuthFree}>Реєстрація</div></div>}
      </div>
      <div className="header_mobile">
        <img onClick={handleOpenSidebar} src={Burger} alt="" />
        <div className='header_mobileImg' >
          <img src={CentrmedLogo} alt="Logo" /> <span>CentrMed</span>
        </div>
      </div>
      <div className={`sidebar-container ${isOpenSidebar ? 'open' : ''}`}>
        <SideBar isOpen={isOpenSidebar} onClose={handleCloseSidebar} />
      </div>
    </>
  )
}

export default Header