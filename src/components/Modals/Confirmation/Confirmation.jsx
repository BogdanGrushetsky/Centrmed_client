import './Confirmation.css';
import { useState } from 'react';
import { Button } from '../../Button/Button';
import { CheackBox } from '../../ComponentsProfile/UserComponents/ComponentSearch/CheackBox/CheackBox';
import { InputAllUser } from '../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser';
import { ReactComponent as CloseButton } from '../../../icons/closeButton.svg';
export const Confirmation = () => {
	const [emailInput, setEmailInput] = useState('');
	const [phoneInput, setPhoneInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [calendarEvent, setCalendarEvent] = useState(false);

	const formHandler = (event) => {
		event.preventDefault();
		console.log({
			email: emailInput,
			phone: phoneInput,
			password: passwordInput,
			calendarEvent
		});
	};

	const handleCalendarEvent = () => {
		setCalendarEvent(!calendarEvent);
		console.log(calendarEvent);
	};

	return (
		<section className='Confirmation'>

			<span className='Confirmation__title'>Для підтвердження запису до лікаря треба ввести ці дані </span>
			<div className='Confirmation__inputWrapper'>
				<InputAllUser
					color={'white'}
					inputTitle={'Email'} type={'email'}
					placeholder={'you@company.com'}
					value={emailInput}
					onChange={e => setEmailInput(e.target.value)} />
				<InputAllUser
					color={'white'}
					inputTitle={'Номер телефону'} type={'number'}
					placeholder={'+380 (063) 548 99 19'}
					value={phoneInput}
					onChange={e => setPhoneInput(e.target.value)} />
				<InputAllUser
					color={'white'}
					inputTitle={'Пароль'} type={'password'}
					placeholder={'************'}
					value={passwordInput}
					onChange={e => setPasswordInput(e.target.value)} />
			</div>
			<div className='Confirmation__closeButtonWrapper'>
				<CloseButton className='AuthFree__closeButtonSvg' />
			</div>
			<div className='Confirmation__buttonWrapper'>
				<CheackBox style={{ color: 'white' }} checked={calendarEvent}
					onChange={handleCalendarEvent}>Позначити івент в Google Calendar</CheackBox>
				<Button style={{ border: '1px solid black' }}>Записатись</Button>
			</div>
		</section>
	);
};