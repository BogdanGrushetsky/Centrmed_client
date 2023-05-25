import { DoctorDto } from '../../../../dto/sendOnBackend/doctor'
import { useLayoutEffect, useState } from 'react'
import $api from '../../../../http/index'
import { removeEmptyStrings } from '../../../../helper/helperFunction'
import { useRequestStatus } from '../../../../hooks/useRequestStatus/useRequestStatus'
import { routeDoctor, routeSpecialist } from '../../../../http/routeBack'
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError'
export const HookFormaData = () => {
	const [arraySpecilist, setArraySpesialist] = useState()
	const [dataDoctor, setDataUser] = useState()
	const { throwError } = useShowError()
	const {
		toogleLoading,
		ShowLoader,
	} = useRequestStatus()

	useLayoutEffect(() => {
		try {
			toogleLoading()
			$api.get(routeDoctor.formaAllInfoDoctor).then(e => setDataUser(e.data.doctor)).catch(e => throwError(e))
			$api.get(routeSpecialist.getAllSpecialist).then(e => { setArraySpesialist(e.data.specialists) }).catch(e => throwError(e))
		} finally {
			toogleLoading()
		}

	}, [])

	const handleSubmit = (name, email, phoneNumber, country, region, dateOfBirth, city, bio, specialist, acceptsInClinics, consultationPrice, workExperience, study) => {
		if (phoneNumber.length !== 13) {
			phoneNumber = ''
		}
		if (dateOfBirth === null) {
			dateOfBirth = ''
		}
		if (dataDoctor?.specialist?.length) {
			specialist = ''
		}
		const userInfo = removeEmptyStrings(new DoctorDto({ name, email, phoneNumber, country, region, dateOfBirth, city, bio, specialist, acceptsInClinics, consultationPrice, workExperience, study }))
		console.log(userInfo)
		// eslint-disable-next-line no-restricted-globals
		$api.post('/doctorApi/doctor/info', userInfo).then(e => { location.reload() }).catch(e => throwError(e))
	}
	return {
		ShowLoader,
		arraySpecilist,
		dataDoctor,
		handleSubmit,
	}
}