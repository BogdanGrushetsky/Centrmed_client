


import './TogleBlock.css'

export const TogleBlock = ({ MassageActive }) => {

	return (
		<div className='TogleBlock__wrapper'>
			<button className={`TogleBlock__button ${MassageActive ? 'active' : null}`}>Повідомлення </button>
			<button className={`TogleBlock__button ${MassageActive ? null : 'active'}`}>Листування</button>
		</div>
	)
}