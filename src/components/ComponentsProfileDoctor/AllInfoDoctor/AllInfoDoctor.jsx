
import React, { useLayoutEffect, useState } from 'react'
import { SpecialityBlock } from '../../SpecialityBlock/SpecialityBlock'
import './AllInfoDoctor.css'
import $api from '../../../http'
import { routeDoctor } from '../../../http/routeBack'
import { useParams } from 'react-router-dom'

export default React.memo(function AllInfoDoctor() {
	const [data, setData] = useState({})
	const { id } = useParams()
	useLayoutEffect(() => {
		$api.get(`${routeDoctor.profileDoctor}${id}`).then(e => setData(e.data.doctor))

	}, [id])

	console.log(data)
	return (
		<div className='AllInfoDoctor'>
			<div className='AllInfoDoctor__wrapper top'>
				<span className='AllInfoDoctor__title'>Основна інформація про лікаря</span>
				<span className='AllInfoDoctor__nameInfo'>Спеціальність та напрямок роботи</span>
				<div className='AllInfoDoctor__wrapperSpecialiti'>
					{data.specialist && data?.specialist?.map((el, i) =>
						<SpecialityBlock key={el._id} main={i === 0}>{el.specialist}</SpecialityBlock>
					)}
				</div>
				<span className='AllInfoDoctor__nameInfo'>Назва медичного ВУЗу</span>
				<span>{data?.doctorInfo?.study}</span>
				<span className='AllInfoDoctor__nameInfo'>Приймає в клініках</span>
				<span>{data?.doctorInfo?.acceptsInClinics}</span>
			</div>
			<div className='AllInfoDoctor__wrapper botton'>
				<span className='AllInfoDoctor__title'>Корисна інформація про себе</span>
				<span>{data?.doctorInfo?.bio}</span>
			</div>
		</div>
	)
})