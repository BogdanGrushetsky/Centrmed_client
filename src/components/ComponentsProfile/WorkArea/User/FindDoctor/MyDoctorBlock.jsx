import React, { useLayoutEffect, useState } from 'react'
import { BlockSeach } from '../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import { MyDoctorCard } from '../../../UserComponents/MyDoctorCard/MyDoctorCard'
import $api from '../../../../../http'
import { routeUser } from '../../../../../http/routeBack'
import { useShowError } from '../../../../../hooks/useRequestStatus/useShowError'




export default React.memo(function MyDoctorBlock() {
	const { throwError } = useShowError()
	const [arrayDoctor, setArrayDoctor] = useState([])
	useLayoutEffect(() => {
		$api.get(routeUser.myDoctor).then(e => setArrayDoctor(e.data.doctors)).catch(e => throwError(e))
	}, [])

	return (<BlockSeach>
		<h2 className='FindDoctor__h2'>Мої лікарі</h2>
		<div className='FindDoctor__mydoctorWrapper'>
			{arrayDoctor.length === 0 ?
				<span>Поки що у вас немає особистих лікарів</span>
				:
				arrayDoctor.map(item => {
					const { name, id, country, mainSpecialist } = item
					return (<MyDoctorCard speciality={mainSpecialist} id={id} country={country} key={id} name={name} />)
				})}
		</div>
	</BlockSeach>)
})