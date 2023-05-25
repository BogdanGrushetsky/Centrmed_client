import { Button } from '../../Button/Button';
import { InputAllUser } from '../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser';
import { ReactComponent as Google } from '../../../icons/googleIcon.svg';
import { ReactComponent as Facebook } from '../../../icons/faceboockIcon.svg';


import './Registration.css';
import { EmailInputValidation } from '../../ComponentsProfile/СommonСomponents/EmailInputValidation/EmailInputValidation';

export const Registration = (props) => {
  const {
    innerRef,
    passwordInput,
    setPasswordInput,
  } = props;

  const inputsHandler = (event) => {
    event.preventDefault();
  }

  const handleGoogleButton = () => {
    console.log('Google button')
  };

  const handleFacebookButton = () => {
    console.log('Facebook button');
  };

  return (
    <>
      <div className='Registration'>
        <form
          className='Registration__form'
          onSubmit={inputsHandler}
        >
          <EmailInputValidation
            innerRef={innerRef}
            placeholder={'you@company.com'}
          />
          <InputAllUser
            color={'white'}
            inputTitle={'Пароль'} type={'password'}
            placeholder={'************'}
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)} />
        </form>

        <div className='Registration__separator'>
          <div className='Registration__line'></div>
          <p className='Registration__or-text'>Або</p>
          <div className='Registration__line'></div>
        </div>
        <div className='Registration__help'>
          <span className='Registration__helpTitle'>Авторизуйтесь за допомогою</span>
          <div className='Registration__buttonWrapper'>
            <Button onClick={handleGoogleButton}> <Google className='Registration__iconButton' />  Google</Button>
            <Button onClick={handleFacebookButton}> <Facebook className='Registration__iconButton' /> Facebook</Button>
          </div>
        </div>

      </div>

    </>
  );
};