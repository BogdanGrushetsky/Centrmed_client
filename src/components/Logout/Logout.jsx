import { ReactComponent as MyLogo } from '../../icons/logout.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import './Logout.css'
export const Logout = () => {
	const navigate = useNavigate();
	const { store } = useContext(Context);
	const funcLogout = () => {
		store.logout()
		navigate('/')
		// eslint-disable-next-line no-restricted-globals
		location.reload()
	}

	return (
		<div onClick={funcLogout} className='Logout'>
			<div>Вийти</div>
			<MyLogo />
		</div>
	)
}