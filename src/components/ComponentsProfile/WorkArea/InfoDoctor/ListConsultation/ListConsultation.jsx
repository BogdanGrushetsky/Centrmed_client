

import InfoBlock from '../../../../ComponentsProfileDoctor/InfoBlock/InfoBlock'
import { CardTimeConsultation } from '../../../СommonСomponents/CardTimeConsultation/CardTimeConsultation'
import './ListConsultation.css'
export const ListConsultation = () => {



	return (
		<>
			<InfoBlock />
			<div className='ListConsultation__wrapperCard'>
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
				<CardTimeConsultation />
			</div>
		</>
	)
}