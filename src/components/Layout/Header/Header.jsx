import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import SideBar from '../../SideBar/SideBar';

import Auth from '../../Modals/Auth/Auth';
import AuthFree from '../../Modals/AuthFree/AuthFree';
import './header.css';
import { useTheme } from '../../../hooks/useTheme'
import Burger from './../../../icons/Burger.svg'
import CentrmedLogo from './../../../icons/CentrmedLogo.svg'
import { NavLink } from 'react-router-dom';
import { Switch } from './Switch/Switch'
import { Button } from '../../Button/Button';
import { Context } from '../../..';
import { Logout } from '../../Logout/Logout';
import { observer } from 'mobx-react-lite';
import ErrorModal from '../../Modals/ErrorModal/ErrorModal';

function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { value, changeThema } = useTheme()
  const { store } = useContext(Context);
  useLayoutEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()

    }
  }, []);


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

  // const ModalError = ({ errorModalState }) => (
  //   <ReactModal
  //     isOpen={errorModalState}
  //     overlayClassName="overlay"
  //     className="content"
  //     ariaHideApp={false}
  //     style={{ overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 6, }, }}>
  //     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  //       <ErrorModal />
  //     </div>
  //   </ReactModal>);

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
  return (
    <>
      <div className='header'>
        <div className='header_block'>

          <img src={Burger} style={store.isAuth ? { display: 'block' } : { display: 'none' }} onClick={handleOpenSidebar} className='header_burger' alt="burger" />
          <div className='header_wrapperButton'> <Button>Черговий лікар</Button></div>
        </div>
        < NavLink to='/'><div className='header_block'><img src={CentrmedLogo} alt="Logo" /> <span>CentrMed</span></div></NavLink>
        <div className='header_block'>
          {
            !store.isAuth ?
              <div className='header__wrapperAuth'>
                <div className='header__pointer' onClick={showAuth} >Авторизація</div>
                <div className='header__pointer' onClick={showAuthFree}>Реєстрація</div></div>
              :

              <div className='header__wrapperAuth'>
                <Logout />
              </div>
          }
          <div className='header__switcherWrapper'>
            <Switch
              isOn={value}
              onColor="#272633"
              handleToggle={changeThema}
            />
          </div>
        </div>
      </div>
      <div className={`sidebar-container ${isOpenSidebar ? 'open' : ''}`}>

        <SideBar isOpen={isOpenSidebar} onClose={handleCloseSidebar} />
        <ErrorModal />
      </div>
    </>)
}

export default observer(Header)