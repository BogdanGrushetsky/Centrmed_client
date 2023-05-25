

import './TextAreaAllUser.css'

export const TextAreaAllUser = ({ innerRef, title, value, placeholder, ...props }) => {


	return (
		<div className='TextAreaAllUser__wrapperTextArea'>
			<span className='TextAreaAllUser__text'>{title}</span>
			<textarea ref={innerRef} {...props} value={value} placeholder={placeholder} className='TextAreaAllUser__textArea' />
		</div>
	)
}