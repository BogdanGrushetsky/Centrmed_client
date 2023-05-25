
import './BlockSeach.css'

export const BlockSeach = ({ children, ...props }) => {

	return (
		<div className='BlockSeach' {...props}>
			{children}
		</div>
	)
}