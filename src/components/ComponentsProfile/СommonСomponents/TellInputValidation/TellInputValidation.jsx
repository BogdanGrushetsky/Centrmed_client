import { useState } from 'react'
import './TellInputValidation.css'

export const TellInputValidation = ({ placeholder, innerRef }) => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [valid, setValid] = useState(false)

	const handlePhoneNumberChange = (event) => {
		const value = event.target.value;
		setValid(false)
		if (/^\+38\d{0,10}$/.test(value)) {
			setPhoneNumber(value);
		}

	};
	const leave = () => {
		if (phoneNumber.length !== 13) {
			setValid(true)
		}
	}
	return (
		<div className={`TellInputValidation__wrapperInput`}>
			<span className='TellInputValidation__text'> Ваш номер телефону </span>
			<input
				onClick={() => setPhoneNumber('+38')}
				ref={innerRef}
				maxLength="14"
				placeholder={placeholder}
				onChange={handlePhoneNumberChange}
				value={phoneNumber}
				onBlur={leave}
				className={`TellInputValidation__input ${valid ? 'validation' : ''} `} />
		</div>
	)
}