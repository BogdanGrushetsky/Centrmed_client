

import { useState } from 'react'
import './NameInputValidation.css'

export const NameInputValidation = ({ innerRef, placeholder, ...props }) => {
	const [valueName, setValueName] = useState('')
	const validationValue = (e) => {
		setValueName(e.target.value.replace(/\d+/g, ''))
		if (e.target.value.length === 40) {
			setValueName(e.target.value.replace(/\d+/g, '').slice(0, 30))
		}
	}
	return (
		<div className='NameInputValidation__wrapperInput'>
			<span className='NameInputValidation__text'>ПІБ </span>
			<input
				ref={innerRef}
				type={'text'}
				{...props}
				value={valueName}
				onChange={validationValue}
				placeholder={placeholder}
				className={`NameInputValidation__input `} />
		</div>
	)
}