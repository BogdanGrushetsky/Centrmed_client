import { Button } from '../../../Button/Button'
import { ReactComponent as Calendar } from '../../../../icons/calendar.svg';
import { RatingsDoctor } from '../../UserComponents/RatingsDoctor/RatingsDoctor'
import './CardRetingDoctor.css'
import { GetAvatar } from '../../../GetAvatar/GetAvatar';
import { routeUser } from '../../../../http/routeBack';
import $api from '../../../../http';
import { Link } from 'react-router-dom';

export const CardRetingDoctor = ({ id, name, price, country, speciality, rate, region, city }) => {
	const addToMyDoctor = (api, id) => {
		api.post(`${routeUser.addToMyDoctor}${id}`).then(e => console.log(e))

	}
	return (
		<div className='CardRetingDoctor'>
			<div className='CardRetingDoctor__functionalWrapper' >
				<Link to={`/profileDoctor/${id}/profile`} className='CardRetingDoctor__wrapperLeftColumn'>
					<GetAvatar id={id} />
					<div className='CardRetingDoctor__textWrapper'>
						<span className='CardRetingDoctor__name'>{name}</span>
						<span className='CardRetingDoctor__speciality'>{speciality}</span>
						{country && <span className='CardRetingDoctor__country'>{country}, {region && region + ','} {city && city}</span>}
					</div>
				</Link>
				<div className='CardRetingDoctor__rightFunctional'>
					<div className='CardRetingDoctor__wrapperPriceAndRate'>
						{!price && <span className='CardRetingDoctor__price'>Одна консультація {price}UAH</span>}
						<RatingsDoctor className='CardRetingDoctor__rate' rate={rate} />
					</div>
					<div className='CardRetingDoctor__buttonsWrapper'>
						<div onClick={() => addToMyDoctor($api, id)} className='CardRetingDoctor__addDoctor'>+ Додати в мої лікарі</div>
						<div className='CardRetingDoctor__buttonWrapper'>
							<Button> <Calendar className='CardRetingDoctor__svg' /> Записатися на відеоконсультацію</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}