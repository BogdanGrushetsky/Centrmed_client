import { Button } from '../../../Button/Button'
import { EditProfileInputUser } from '../../ComponentsAdminTools/EditProfileInputUser/EditProfileInputUser'
import './EditProfileUser.css'
import { useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import $api from '../../../../http'
import { routeAdmin, routeBack } from '../../../../http/routeBack'
import { AvatarLoader } from '../../../ComponentsProfile/СommonСomponents/AvatarLoader/AvatarLoader'
import { removeEmptyStrings } from '../../../../helper/helperFunction'
import { adminEdtitUserDTO } from '../../../../dto/sendOnBackend/adminEdtitUser'
import { useDeleteHook } from '../../../../hooks/useDeleteHook'
import { useRequestStatus } from '../../../../hooks/useRequestStatus/useRequestStatus'
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError'
export const EditProfileUser = () => {
	const { throwError } = useShowError()
	const { id } = useParams()
	const [userData, setUserData] = useState()
	const {
		toogleLoading,
		ShowLoader,
	} = useRequestStatus()

	const {
		openModal,
		Modal } = useDeleteHook(routeAdmin.deleteUser, id, userData?.name)
	useLayoutEffect(() => {
		toogleLoading()
		$api.get(`${routeAdmin.getUser}${id}`)
			.then(e => setUserData(e.data.user))
			.catch(e => throwError(e))
			.finally(() => toogleLoading())
	}, [id])
	const infoUser = useRef({
		name: null,
		email: null,
		dateOfBirth: null,
		phoneNumber: null,
		password: null
	})
	const handleSubmit = (name, email, phoneNumber, dateOfBirth, password) => {
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
		const userInfo = removeEmptyStrings(new adminEdtitUserDTO({ name, email, phoneNumber, dateOfBirth, password }))
		// eslint-disable-next-line no-restricted-globals
		$api.patch(`${routeAdmin.editProfileUser}/${id}`, userInfo).then(e => { location.reload() })
	}

	console.log(userData)
	return (
		ShowLoader() || <div className='EditProfile'>
			<div className='EditProfile__imgBlock' >
				<div className='EditProfile__titleBlock'>Інформація про лікаря</div>
				<AvatarLoader path={routeBack.userAvatarDownload} id={userData?._id} />
			</div>
			{userData && <EditProfileInputUser infoUser={infoUser} dataUser={userData} />}

			<div className='EditProfileUser__wrapperButton'>
				<Button onClick={() => handleSubmit(
					infoUser.current.name.value,
					infoUser.current.email.value,
					infoUser.current.phoneNumber.value,
					infoUser.current.dateOfBirth,
					infoUser.current.password.value,
				)} >Зберегти зміни</Button>
				<div className='EditProfileUser__deleteButton'>
					<Button onClick={openModal} color={'red'}>Видалити профіль</Button>
					<Modal />
				</div>
				<Button color={'green'} >Перенесення зустрічі</Button>
			</div>
		</div>
	)
}



