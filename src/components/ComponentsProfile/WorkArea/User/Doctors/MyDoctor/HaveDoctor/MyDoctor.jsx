import './MyDoctor.css'
import { TitlePages } from '../../../../../СommonСomponents/TitlePages/TitlePages'
import { useLayoutEffect, useState } from 'react'
import { routeUser } from '../../../../../../../http/routeBack'
import $api from '../../../../../../../http'
import { MyDoctorCard } from '../../../../../UserComponents/MyDoctorCard/MyDoctorCard'
import { useShowError } from '../../../../../../../hooks/useRequestStatus/useShowError'
export const MyDoctor = () => {
	const [arrayDoctor, setArrayDoctor] = useState([])
	const { throwError } = useShowError()
	useLayoutEffect(() => {
		$api.get(routeUser.myDoctor).then(e => setArrayDoctor(e.data.doctors)).catch(e => throwError(e))
	}, [])
	console.log(arrayDoctor)
	return (
		<>
			<TitlePages>Мої лікарі</TitlePages>
			<div className='MyDoctor'>
				{arrayDoctor.length === 0 ?
					<span className='MyDoctor__noDoctor'>Поки що у вас немає особистих лікарів</span>
					:
					arrayDoctor.map(e => {
						const { name, id, country, mainSpecialist } = e
						return <MyDoctorCard edit={true} speciality={mainSpecialist} country={country} key={id} id={id} name={name} />
					})}
			</div>
		</>
	)
}