

import { useState } from 'react'
import './EmailInputValidation.css'
export const EmailInputValidation = ({ innerRef, placeholder, ...props }) => {
	const [valueEmail, setValueEmail] = useState('')
	const [isValid, setIsValid] = useState(true);
	const validationValue = (e) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		setValueEmail(e.target.value.replace(/\[^0-9]+d+/g, ''))
		setIsValid(emailRegex.test(e.target.value));
	}
	const deleteText = () => {
		if (!isValid) {
			setValueEmail('')
		}
	}
	return (
		<div className='EmailInputValidation__wrapperInput'>
			<span className='EmailInputValidation__text'>Email </span>
			<input
				onMouseLeave={deleteText}
				ref={innerRef}
				type={'text'}
				{...props}
				value={valueEmail}
				onChange={validationValue}
				placeholder={placeholder}
				className={`EmailInputValidation__input ${!isValid ? 'valid' : ''}`} />
		</div>
	)
}