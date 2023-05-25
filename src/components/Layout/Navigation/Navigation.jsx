

import { NavLink } from 'react-router-dom';

import './Navigation.css'
import { DropDounNav } from './DropDounNav/DropDounNav';


export const Navigation = ({ tabs }) => {

	return (
		<>
			<div className="TabNavigation">
				{tabs.map((el, i) =>
					<NavLink key={i} to={el.path} className={({ isActive }) => isActive ? 'active' : ''}>
						{el.title}
					</NavLink>)}
			</div>
			<div className="TabNavigation__dropDoun">
				<DropDounNav arrayNav={tabs} />
			</div>
		</>
	)
}