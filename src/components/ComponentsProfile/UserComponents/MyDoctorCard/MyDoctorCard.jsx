import { GetAvatar } from '../../../GetAvatar/GetAvatar'
import './MyDoctorCard.css'
import { ReactComponent as Button } from '../../../../icons/buttonDell.svg';
import { useDeleteHook } from '../../../../hooks/useDeleteHook';
import { routeUser } from '../../../../http/routeBack';
import { Link } from 'react-router-dom';

export const MyDoctorCard = ({ id, name, price, country, speciality, edit }) => {
	const { openModal,
		Modal } = useDeleteHook(routeUser.deleteDoctor, id, name)

	return (
		<div className='MyDoctorCard'>
			<GetAvatar id={id} />
			<Link to={`/profileDoctor/${id}/profile`} className='MyDoctorCard__textWrapper'>
				<span className='MyDoctorCard__name'>{name}</span>
				<span className='MyDoctorCard__speciality'>{speciality}</span>
				{country && <span className='MyDoctorCard__country' >{country}</span>}
			</Link>
			<div>
				{price && <span className='MyDoctorCard__price'>Одна консультація {price}UAH</span>}
			</div>

			{edit && <><Button onClick={openModal} className={'MyDoctorCard__Button'} />
				<Modal /></>}
		</div>
	)
}