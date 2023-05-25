import { ReactComponent as Pen } from '../../../../icons/pan.svg';
import { ReactComponent as Trash } from '../../../../icons/trash.svg';
import { ReactComponent as Watch } from '../../../../icons/watch.svg';
import './CardAdminPanel.css'
import { useDeleteHook } from '../../../../hooks/useDeleteHook';
import { Link } from 'react-router-dom';
import { GetAvatar } from '../../../GetAvatar/GetAvatar';
import { routeAdmin } from '../../../../http/routeBack';
export const CardAdminPanel = ({ name, status, role, email, time, id }) => {
	const { openModal,
		Modal } = useDeleteHook(role === 'doctor' ? routeAdmin.deleteDoctor : routeAdmin.deleteUser, id, name)
	return (
		<li className='CardAdminPanel'>
			<div className='CardAdminPanel__nameNav'>
				<GetAvatar id={id} className='CardAdminPanel__ImgNameBlock' />
				{name}
			</div>
			<div className='CardAdminPanel__statusNav'>
				{role === 'doctor' && (status ?
					<div className='CardAdminPanel__statusWrapper'>
						<p className='CardAdminPanel__cirle'></p>
						<span>Підтверджений</span>
					</div>
					:
					<div className='CardAdminPanel__statusWrapper'>
						<p className='CardAdminPanel__cirle false'></p>
						<span> Не підтверджений</span>
					</div>)}
			</div>
			<div className='CardAdminPanel__timeNav'> {time}</div>
			<div className='CardAdminPanel__roleNav'>{role}</div>
			<div className='CardAdminPanel__emailNav'>{email}</div>
			<div className='CardAdminPanel__managementTimeNav'>
				<Watch className='CardAdminPanel__watchSvg' />
			</div>
			<div className='CardAdminPanel__buttonBlockNav'>
				<Trash onClick={openModal} className='CardAdminPanel__penSvg' />
				<Link
					to={
						role === 'doctor' ?
							`../doctorEdit/${id}` :
							`../userEdit/${id}`}>
					<Pen className='CardAdminPanel__penSvg' />
				</Link>
			</div>
			<Modal />
		</li>
	)
}