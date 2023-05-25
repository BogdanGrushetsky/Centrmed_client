import React, { useContext } from 'react';

import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { Context } from "../../index";
import Auth from '../../components/Modals/Auth/Auth';
import AuthFree from '../../components/Modals/AuthFree/AuthFree';
import img from '../../images/doctor.png'
import { ReactComponent as Consultation } from '../../icons/consultation.svg';
import { ReactComponent as MyCabineIcon } from '../../icons/myCabineIcon.svg';
import { ReactComponent as Home } from '../../icons/home.svg';
import { ReactComponent as Doctors } from '../../icons/doctors.svg';
import { ReactComponent as Close } from '../../icons/closeButton.svg';

import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { GetAvatar } from '../GetAvatar/GetAvatar';
import { Logout } from '../Logout/Logout';

function SideBar({ isOpen, onClose }) {
  const { store } = useContext(Context);
  let User
  let Docotor
  if (store.role === 'doctor') {
    // User = store.user
    Docotor = store.user
  } if (store.role === 'patient') {
    User = store.user
  }
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


  const noneUserDiv = ((!User && !Docotor) && <>
    <li className='sideBar__li docta mobile'>
      <span>Черговий лікар</span>
    </li>
    <li className='sideBar__li mobile' onClick={onClose}>
      <span onClick={showAuth}>Авторизація</span>
    </li>
    <li className='sideBar__li mobile' onClick={onClose}>
      <span onClick={showAuthFree}>Реєстрація</span>
    </li></>);

  const userDiv = (User && <>
    <NavLink to='/MyCabinet'
      className={({ isActive }) => ` sideBar__li ${isActive ? 'active' : ''}`}>
      <MyCabineIcon className='sidebar__icon' />
      <span> Мій кабінет</span>
    </NavLink>
    <NavLink to='/doctors'
      className={({ isActive }) => ` sideBar__li ${isActive ? 'active' : ''}`}>
      <Doctors className='sidebar__icon doc' />
      <span>Лікарі</span>
    </NavLink>
    <li className='sideBar__li '>
      <Consultation className='sidebar__icon' />
      <span>Консультації</span>
    </li>
    <NavLink to='/user'
      className={({ isActive }) => ` sideBar__user ${isActive ? 'active' : ''}`}>
      <img className='sidebar__imgUser' alt={User?.name} src={User?.img || img} />
      <span>{User?.name}</span>
    </NavLink>
    <li className='sideBar__logout'>
      <Logout />
    </li> </>);

  const doctorDiv = (Docotor && <>
    <NavLink
      to='/doctor'
      className={({ isActive }) => ` sideBar__li ${isActive ? 'active' : ''}`}>
      <MyCabineIcon className='sidebar__icon' />
      <span> Мій кабінет</span>
    </NavLink>
    <li className='sideBar__li'>
      <Doctors className='sidebar__icon doc' />
      <span>Пацієнти</span>
    </li>
    <li className='sideBar__li '>
      <Consultation className='sidebar__icon' />
      <span>Консультації</span>
    </li>
    <li className='sideBar__user'>
      <GetAvatar className='sideBar__avatarUser' id={store.user.id} />
      <span>{Docotor?.name}</span>
    </li>
    <li className='sideBar__logout'>
      <Logout />
    </li></>)



  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar__close" onClick={onClose}> </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__hideClick" onClick={onClose} > <Close className="sidebar__closeSvg" /></div>
        <ul className="sidebar__content">
          <NavLink to='/' className={({ isActive }) => ` sideBar__li ${isActive ? 'active' : ''}`}>
            <Home className='sidebar__icon' alt='Головна icon' />
            <span>Головна</span>
          </NavLink>
          {noneUserDiv}
          {userDiv}
          {doctorDiv}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
