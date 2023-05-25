import './Button.css'
export const Button = ({ color, children, ...props }) => {
	const colorButton = color === 'green' ? 'green' : color === 'red' ? 'red' : ''
	return (
		<button className={`button ${colorButton}`}  {...props}>
			{children}
		</button>
	)
}