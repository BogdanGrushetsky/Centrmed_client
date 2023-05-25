
import { ReactComponent as Calendar } from '../../../../../icons/calendar.svg';

import './InputData.css'

export const InputData = ({ placeholder }) => {


	return (
		<div className='InputData'>
			<Calendar className='InputData__svg' />
			< input className='InputData__input' placeholder={placeholder} />
		</div>
	)
}