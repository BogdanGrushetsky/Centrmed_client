import './AuthFree.css'
import { Registration } from '../Registration/Registration';
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { useState, useContext, useRef } from 'react';
import { Button } from '../../Button/Button';
import { ReactComponent as CloseButton } from '../../../icons/closeButton.svg';
import { CheackBox } from '../../ComponentsProfile/UserComponents/ComponentSearch/CheackBox/CheackBox';
import { Link } from 'react-router-dom';
const AuthFree = ({ hideAuthFree }) => {
  const innerRef = useRef({})
  const [passwordInput, setPasswordInput] = useState('');
  const [role, setRole] = useState('patient');
  const [valueCheckPraivesy, setValueCheckPraivesy] = useState(false)
  const [valueCheckOfert, setValueCheckOfert] = useState(false)
  const [validation, setValidation] = useState(true)
  const [errorRegistration, setErrorRegistration] = useState('')
  const [showEmailMassage, setShowEmailMassage] = useState(false)
  const { store } = useContext(Context);

  const patientButtonHandler = () => {
    setRole('user');
  };

  const doctorButtonHandler = () => {
    setRole('doctor');
  };

  const continueButtonHandler = async () => {
    if (valueCheckOfert && valueCheckPraivesy) {
      const res = await store.registration(innerRef.current.value, passwordInput, role)
      localStorage.setItem('role', role);
      console.log(res)
      if (res === true) {
        setShowEmailMassage(true)
      } else {
        setErrorRegistration(res)
      }
      setValidation(true)
    }
    else {
      setValidation(false)
    }
  };
  return (
    <div className='AuthFree'>
      {!showEmailMassage ?
        <>
          <span className='AuthFree__title'>Зареєструватися безкоштовно</span>
          <span className='AuthFree__desc'>
            Після реєстрації на нашому сайті вам буде відкритий доступ в особистий кабінет, і ви зможете користуватися усіма перевагам сервісу
          </span>
          {errorRegistration && <div className='AuthFree__error'> <span >{errorRegistration}</span></div>}
          <div className='AuthFree__buttonRoleWrapper'>
            <button onClick={patientButtonHandler} className={`AuthFree__button left ${!(role === 'doctor') ? 'active' : ''} `} >
              Я пацієнт
            </button>

            <button className={`AuthFree__button ${role === 'doctor' ? 'active' : ''} `} onClick={doctorButtonHandler} >
              Я лікар
            </button>
          </div>

          <Registration
            role={role}
            operationType={'Зареєструватися'}
            innerRef={innerRef}
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
          />
          <div className={`Registration__cheackWrapper ${!validation && 'validation'}`}>
            {!validation && <span className='AuthFree__validation'> Погодьтеся з умовами, будь ласка </span>}
            <CheackBox value={valueCheckOfert} name={'cheack1'} onChange={(event) => setValueCheckOfert(event.target.checked)}>
              Ви погоджуєтеся з нашим <Link onClick={hideAuthFree} to={'/docs/ContractPaidInformation'}>договором оферти</Link> та <Link onClick={hideAuthFree} to={'/docs/ContractPaidInformation'}> договором оферти</Link>
            </CheackBox>
            <CheackBox value={valueCheckPraivesy} name={'cheack2'} onChange={(event) => setValueCheckPraivesy(event.target.checked)}>
              Ви погоджуєтеся з нашою доброзичливою <Link onClick={hideAuthFree} to={'/docs/PrivacyPolicy'}> політикою конфіденційності</Link>.
            </CheackBox>
          </div>

          <div className='AuthFree__buttonWrapper'>
            <Button onClick={continueButtonHandler}> Зареєструватись</Button>
          </div>

        </>
        :
        <div className='AuthFree__wrapperFinishRegistretion'>
          <h3>Завершення реєстрації</h3>
          <span>
            На вказану вами адресу електронної пошти :{innerRef.current.value}  відправлено листа з посиланням для активації. Зайдіть в це повідомлення і активуйте аккаунт для доступу до особистого кабінету.
          </span>
        </div>}
      <div onClick={hideAuthFree} className='Auth__closeButtonWrapper'>
        <CloseButton className='Auth__closeButtonSvg' />
      </div>
    </div>
  );
};

export default observer(AuthFree);