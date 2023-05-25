import { Button } from '../../Button/Button'
import { BlockSeach } from '../../ComponentsProfile/UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import img from '../../../images/doctor.png'
import { RatingsDoctor } from '../../ComponentsProfile/UserComponents/RatingsDoctor/RatingsDoctor'

import './InfoBlock.css'
import React, { useLayoutEffect, useState } from 'react'
import $api from '../../../http'
import { routeDoctor } from '../../../http/routeBack'
import { useParams } from 'react-router-dom'
import { GetAvatar } from '../../GetAvatar/GetAvatar'
export default React.memo(
	function InfoBlock() {
		const { id } = useParams()
		const [data, setData] = useState({})
		useLayoutEffect(() => {
			$api.get(`${routeDoctor.profileDoctor}${id}`).then(e => setData(e.data.doctor))

		}, [id])
		const { name, rate, consultationPrice, doctorInfo, specialist } = data
		return (
			<BlockSeach>
				<div className='InfoBlock'>
					<div>
						<GetAvatar id={id} />
					</div>
					<div className='InfoBlock__wrapperInfoBlock'>
						<div className='InfoBlock__wrapperTitle'>
							<span className='InfoBlock__name'>{name}</span>
							<span className='InfoBlock__specialist'>{specialist && specialist[0]?.specialist}</span>
							<div className='InfoBlock__rate'>
								<span>Рейтинг:</span>
								<RatingsDoctor rate={rate} />
							</div>
						</div>
						<div className='InfoBlock__wrapperTitle'>
							<span>Стаж роботи: {doctorInfo?.workExperience}років</span>
							<span>Одна консультація: {consultationPrice}грн</span>
							<span>{doctorInfo?.Residence?.country}, {doctorInfo?.Residence?.region}, {doctorInfo?.Residence?.city}</span>
						</div>
						<Button>Записатись на консультацію</Button>
					</div>
				</div>
			</BlockSeach>
		)
	}
)