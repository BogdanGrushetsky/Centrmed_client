
import './CheackBox.css'

export const CheackBox = ({ value, children, chenge, name, ...props }) => {

	return (
		<div className='CheackBlock' >
			<input {...props} checked={value} type="checkbox" className="custom-checkbox" id={name} />
			<label htmlFor={name} ></label>
			<span>{children}</span>
		</div>

	)
}