
import { useDeleteHook } from '../../../hooks/useDeleteHook';
import { routeReview } from '../../../http/routeBack';
import { ReactComponent as Svg } from '../../../icons/rewiev.svg';
import { ReactComponent as SvgTrue } from '../../../icons/rewievTrue.svg';
import { ReactComponent as ButtonDell } from '../../../icons/buttonDell.svg';
import './Reviews.css'

export const Reviews = ({ country, description, feedback, id, name, region }) => {
	const {
		openModal,
		Modal } = useDeleteHook(routeReview.getDelete, id, name)
	return (
		<div className='Reviews'>
			<div>
				<div>{name}</div>
				<div className='Reviews__country'>{country},{region}</div>
			</div>
			{feedback ?
				<div className='Reviews__status'>
					<SvgTrue />
					<span className='Reviews__trueStatus'>Рекомендую</span>
				</div>
				:
				<div className='Reviews__status'>
					<Svg className='Reviews__folseStatus' />
					<span className='Reviews__textStatus'>Не рекомендую</span>
				</div>
			}
			<div className='Reviews__desc'>{description}</div>
			{id && <><Modal />
				<ButtonDell onClick={openModal} className='Reviews__dellButton' /></>}
		</div>
	)
}