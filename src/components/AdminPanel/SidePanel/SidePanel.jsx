import { ReactComponent as Logo } from '../../../icons/CentrmedLogo.svg';
import { ReactComponent as Bottel } from '../../../icons/bottel.svg';
import { ReactComponent as Heard } from '../../../icons/heard.svg';
import { ReactComponent as Patch } from '../../../icons/patch.svg';
import { ReactComponent as Gear } from '../../../icons/gear.svg';
import './SidePanel.css'
import { NavLink } from 'react-router-dom';



export const SidePanel = () => {

	return (
		<div className='SidePanel'>
			<div className='SidePanel__logo'>
				<Logo className='SidePanel__logoSvg' />
				<span className='SidePanel__logoText'>CentrMed</span>
			</div>
			<div className='SidePanel__Ul'>
				<NavLink to='/adminPanel/doctorList'
					className={({ isActive }) => ` SidePanel__link ${isActive ? 'active' : ''}`}>
					<Bottel className='SidePanel__svgLink' />
					<span>Лікарі</span>
				</NavLink>

				<NavLink to='/adminPanel/patientAdmin'
					className={({ isActive }) => ` SidePanel__link ${isActive ? 'active' : ''}`}>
					<Heard className='SidePanel__svgLink' />
					<span>Пацієнти </span>
				</NavLink>
				<NavLink to='/adminPanel/immediateAction'
					className={({ isActive }) => ` SidePanel__link ${isActive ? 'active' : ''}`}>
					<Patch className='SidePanel__svgLink' />
					<span>Негайні дії</span>
				</NavLink>
				<NavLink to='/adminPanel/setings'
					className={({ isActive }) => ` SidePanel__link ${isActive ? 'active' : ''}`}>
					<Gear className='SidePanel__svgLink' />
					<span>Налаштування сайту</span>
				</NavLink>
			</div>
		</div>
	)
}