import './Auth.css'
import { Registration } from '../Registration/Registration';
import { useContext, useRef, useState } from 'react';
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { Button } from '../../Button/Button';
import { ReactComponent as CloseButton } from '../../../icons/closeButton.svg';
import { useNavigate } from 'react-router-dom';

const Auth = ({ hideAuth }) => {
  const navigate = useNavigate();
  const [validation, setValidation] = useState(true)
  const [passwordInput, setPasswordInput] = useState('');
  const { store } = useContext(Context);
  const innerRef = useRef({})

  const [role, setRole] = useState('patient');

  const patientButtonHandler = () => {
    setRole('patient');
  };

  const doctorButtonHandler = () => {
    setRole('doctor');
  };

  const continueButtonHandler = async (event) => {
    event.preventDefault();
    const res = await store.login(innerRef.current.value, passwordInput, role)
    console.log(res)
    if (res === 'doctor') {
      navigate('/doctor/stat')
      hideAuth()
    }
    if (res === 'user') {
      navigate('/user/bookedTime')
      hideAuth()
    }
    if (!res) {
      setValidation(false)
    }
  };

  return (
    <div className='Auth'>
      <span className='Auth__title'>Авторизуйтесь</span>
      <div className='AuthFree__buttonRoleWrapper'>
        <button onClick={patientButtonHandler} className={`AuthFree__button left ${!(role === 'doctor') ? 'active' : ''} `} >
          Пацієнтом
        </button>

        <button className={`AuthFree__button ${role === 'doctor' ? 'active' : ''} `} onClick={doctorButtonHandler} >
          Лікарем
        </button>
      </div>
      {!validation && <span className='Auth__validation' >Невірні введені дані  авторизації</span>}
      <Registration
        operationType={'Авторизуйтесь'}
        innerRef={innerRef}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
      />



      <div className='Auth__buttonWrapper'>
        <Button onClick={continueButtonHandler}>Продовжити</Button>
      </div>

      <div onClick={hideAuth} className='Auth__closeButtonWrapper'>
        <CloseButton className='Auth__closeButtonSvg' />
      </div>

    </div>
  );
};

export default observer(Auth);