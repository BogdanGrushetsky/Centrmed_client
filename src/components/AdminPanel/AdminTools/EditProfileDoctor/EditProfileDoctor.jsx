import { EditProfileInputDoctor } from '../../ComponentsAdminTools/EditProfileInputDoctor/EditProfileInputDoctor'
import { ReactComponent as Cheack } from '../../../../icons/cheack.svg'
import './EditProfileDoctor.css'
import { useLayoutEffect, useRef, useState } from 'react'
import $api from '../../../../http'
import { useParams } from 'react-router-dom'
import { routeAdmin, routeSpecialist } from '../../../../http/routeBack'
import { Button } from '../../../Button/Button'
import { adminEdtitDoctorDTO } from '../../../../dto/sendOnBackend/adminEdtitDoctor'
import { removeEmptyStrings } from '../../../../helper/helperFunction'
import { GetAvatar } from '../../../GetAvatar/GetAvatar'
import { useRequestStatus } from '../../../../hooks/useRequestStatus/useRequestStatus'
import { ReviewBlockAdminPanel } from '../../ComponentsAdminTools/ReviewBlockAdminPanel/ReviewBlockAdminPanel'
import { RatingsDoctor } from '../../../ComponentsProfile/UserComponents/RatingsDoctor/RatingsDoctor'
import { useDeleteHook } from '../../../../hooks/useDeleteHook'
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError'
export const EditProfileDoctor = () => {
	const { throwError } = useShowError()
	const { id } = useParams()
	const [dataDoctor, setDataDoctor] = useState()
	const [arraySpesialist, setArraySpesialist] = useState()
	const {
		toogleLoading,
		ShowLoader,
	} = useRequestStatus()
	const {
		openModal,
		Modal } = useDeleteHook(routeAdmin.deleteDoctor, id, dataDoctor?.name)


	useLayoutEffect(() => {
		toogleLoading()
		$api.get(`${routeAdmin.getDoctor}${id}`).then(async (e) => {
			const dataDoc = e.data.doctor
			await $api.get(routeSpecialist.getAllSpecialist).then(el => {
				let specialist = el.data.specialists
				if (dataDoc.specialist) {
					specialist = specialist.filter(elem => !dataDoc.specialist.some(sp => sp._id === elem._id))
					setArraySpesialist(specialist)
					return
				}
				setArraySpesialist(specialist)
				return
			}).catch(e => throwError(e))
			setDataDoctor(dataDoc)
		}).catch(e => throwError(e)).finally(e => toogleLoading())
	}, [id])
	const infoDoctor = useRef({
		name: null,
		email: null,
		dateOfBirth: null,
		phoneNumber: null,
		country: null,
		region: null,
		city: null,
		bio: null,
		specialist: null,
		password: null,
		acceptsInClinics: null,
		consultationPrice: null,
		workExperience: null,
		study: null
	})
	const handleSubmit = (name, email, phoneNumber, dateOfBirth, bio, specialist, password, acceptsInClinics, consultationPrice, workExperience, study) => {
		if (phoneNumber.length !== 13) {
			phoneNumber = ''
		}
		if (dateOfBirth === null) {
			dateOfBirth = ''
		}
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (!emailRegex.test(email)) {
			email = ''
		}
		const verified = true
		const userInfo = removeEmptyStrings(new adminEdtitDoctorDTO({ name, email, phoneNumber, dateOfBirth, bio, specialist, password, verified, acceptsInClinics, consultationPrice, workExperience, study }))
		// eslint-disable-next-line no-restricted-globals
		$api.patch(`${routeAdmin.editProfileDoctor}/${id}`, userInfo).then(e => { location.reload() }).catch((e) => throwError(e))
	}

	return (
		ShowLoader() || <div className='EditProfile'>
			<div className='EditProfile__imgBlock' >
				<div className='EditProfile__titleBlock'>Інформація про лікаря</div>
				<div className='EditProfile__imgWapper'>
					<GetAvatar id={id} />
				</div>
				{dataDoctor?.verified && <div className='EditProfile__cheackImgBlock'>
					<Cheack className='EditProfile__svgkImgBlock' />
				</div>}
			</div>
			{dataDoctor && <EditProfileInputDoctor
				infoDoctor={infoDoctor}
				dataDoctor={dataDoctor}
				arraySpesialist={arraySpesialist}
			/>}
			<div className='EditProfile__wrapperButton'>
				<Button onClick={() => handleSubmit(
					infoDoctor.current.name.value,
					infoDoctor.current.email.value,
					infoDoctor.current.phoneNumber.value,
					// infoDoctor.current.country.value,
					// infoDoctor.current.region.value,
					infoDoctor.current.dateOfBirth,
					// infoDoctor.current.city.value,
					infoDoctor.current.bio.value,
					infoDoctor.current.specialist,
					infoDoctor.current.password.value,
					infoDoctor.current.acceptsInClinics.value,
					infoDoctor.current.consultationPrice.value,
					infoDoctor.current.workExperience.value,
					infoDoctor.current.study.value,
				)} style={{ width: '300px', }} >
					{dataDoctor?.verified ? 'Зберегти зміни' : 'Підтвердити профіль'}
				</Button >
				<Button style={{ width: '300px', }} color={'white'}>Керування зустрічами</Button>
				{
					dataDoctor?.verified &&
					<div className='EditProfile__wrapperDell'>
						<Button
							color={'red'}
							style={{ width: '300px', }}
							onClick={openModal}>
							Видалити профіль</Button>
						<Modal />
					</div>
				}
			</div>
			<div>
				<div className='EditProfile__titleBlock'>Відгуки лікаря</div>
				<div className='EditProfile__rating'><span>Рейтинг лікаря :</span> <RatingsDoctor rate={dataDoctor?.rate} /> </div>

				<div className='EditProfile__reviewWrapper'>
					<ReviewBlockAdminPanel id={id} />
				</div>
			</div>
		</div >
	)

}