

import { useState } from 'react'
import './InputNumberWithText.css'

export const InputNumberWithText = ({ text, innerRef, name, placeholder, inputTitle, ...props }) => {

	return (
		<div className='InputMoney__wrapperInput'>
			<div className='InputMoney__title'>{inputTitle} </div>
			<input
				ref={innerRef}
				name={name}
				type={'number'}
				{...props}
				placeholder={placeholder}
				className={`InputMoney__input`} />
			<span className='InputMoney__text'>{text}</span>
		</div>
	)
}