import { useRef, useState } from 'react'
import { Button } from '../../../Button/Button'
import { InputAllUser } from '../../СommonСomponents/InputAllUser/InputAllUser'
import { HookRefreshPassword } from './HookRefreshPassword'

export const RefreshPassword = ({ rout }) => {
	const { handleSubmit,
		stateValidation,
		falseSendToServer,
		sucsessRequest } = HookRefreshPassword()
	const passwordValue = useRef({
		oldPassword: null,
		newPassword: null,
		confirmPassword: null,
	})


	return (
		<div  >
			<div className='Forma__wrapperdiv'>
				<div className='Forma__textPass'>{(sucsessRequest && <span className='Forma__sucsessSend'>{sucsessRequest}</span>) || 'Відновлення паролю'}</div>
				{falseSendToServer && <div className='Forma__validationError'>{falseSendToServer}</div>}

			</div>
			<InputAllUser validation={stateValidation} innerRef={el => passwordValue.current.oldPassword = el} name={'oldPassword'} type={'password'} inputTitle={'Поточний пароль'} />
			<InputAllUser validation={stateValidation} innerRef={el => passwordValue.current.newPassword = el} type={'password'} inputTitle={'Новий пароль'} />
			<InputAllUser validation={stateValidation} innerRef={el => passwordValue.current.confirmPassword = el} type={'password'} inputTitle={'Підтвердження паролю'} />
			<div className='Forma__buttomWrapperPassword'>
				<Button
					onClick={() => handleSubmit(passwordValue.current.oldPassword.value, passwordValue.current.newPassword.value, passwordValue.current.confirmPassword.value, rout)}>
					Змінити пароль</Button>
			</div>
		</div>
	)
}

