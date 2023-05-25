

import { useParams, useNavigate } from 'react-router-dom';

import './TabNavigation.css'

export const TabNavigation = ({ tabs, role }) => {

	const { tab } = useParams();

	const navigation = useNavigate();

	return (
		<div className="TabNavigation">
			{tabs.map(el =>
				<div
					key={el.textEng}
					className={tab === el.textEng.toLowerCase() ? 'active' : undefined}
					onClick={() => { navigation(`/${role}/${el.textEng}`) }}
				>{el.textUkr}</div>)}
		</div>
	)
}