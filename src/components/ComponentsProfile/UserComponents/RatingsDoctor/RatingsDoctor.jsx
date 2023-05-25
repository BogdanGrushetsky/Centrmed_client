
import { ReactComponent as Star } from '../../../../icons/star.svg';
import './RatingsDoctor.css'


export const RatingsDoctor = ({ rate, ...props }) => {
	rate = !rate ? -1 : rate - 1

	return (
		<div className='RatingsDoctor' {...props}>
			{Array(5).fill(<></>).map((el, i) => {
				return (
					rate < i ? <Star key={i} className='RatingsDoctor__notActive' /> : <Star key={i} className='RatingsDoctor__active' />
				)
			})}
		</div>
	)
}