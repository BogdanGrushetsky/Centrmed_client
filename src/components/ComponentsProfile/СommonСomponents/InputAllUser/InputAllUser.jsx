

import './InputAllUser.css'

export const InputAllUser = ({ validation, innerRef, name, color, type, placeholder, inputTitle, redText, value, ...props }) => {
	const selectorValidation = !validation ? '' : 'validation'

	return (
		<div className='InputAllUser__wrapperInput'>
			<span style={{ color }} className='InputAllUser__text'>{inputTitle} <strong className='InputAllUser__strong'>{redText}</strong></span>
			<input
				ref={innerRef}
				name={name}
				type={type}
				{...props}
				placeholder={placeholder}
				value={value}
				className={`InputAllUser__input ${selectorValidation}`} />
		</div>
	)
}