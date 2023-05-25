import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as BurgerNav } from '../../../../icons/burgerNav.svg';
import './DropDounNav.css'

export const DropDounNav = ({ arrayNav }) => {
	const [stateOpen, setStateOpen] = useState(false)
	const location = useLocation();
	const toogle = () => setStateOpen(state => !state)
	let name = ''
	arrayNav.forEach((el) => {
		if (el.path === location.pathname.split('/')[-1]) {
			name = el.title
		}
	})

	return (
		<>
			<div className='DropDounNav' onClick={toogle}>
				<div className='DropDounNav__select' >
					{name}
					<BurgerNav />
				</div>
				{stateOpen && <div className='DropDounNav__wrapper'>
					{arrayNav.map((el, i) => {
						return (
							<NavLink to={el.path} key={i} className={({ isActive }) => `DropBlock__button ${isActive ? 'active' : ''}`}>
								{el.title}
							</NavLink>)
					})}</div>}
			</div>
		</>
	)
}