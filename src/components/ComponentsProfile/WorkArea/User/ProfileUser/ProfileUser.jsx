import { TitlePages } from '../../../СommonСomponents/TitlePages/TitlePages'
import { LayoutCabinet } from '../../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { InputAllUser } from '../../../СommonСomponents/InputAllUser/InputAllUser'
import { TellInputValidation } from '../../../СommonСomponents/TellInputValidation/TellInputValidation'
import { RefreshPassword } from '../../../DoctorComponents/RefreshPassword/RefreshPassword'
import './ProfileUser.css'
import { AvatarLoader } from '../../../СommonСomponents/AvatarLoader/AvatarLoader'
import { Button } from '../../../../Button/Button'
import { useEffect, useState } from 'react'
import $api from '../../../../../http/index'
import { useRef } from 'react'
import { UserDto } from '../../../../../dto/sendOnBackend/user'
import { routeBack } from '../../../../../http/routeBack'
import { Calendar } from '../../../СommonСomponents/Calendar/Calendar'
import { NameInputValidation } from '../../../СommonСomponents/NameInputValidation/NameInputValidation'
import { EmailInputValidation } from '../../../СommonСomponents/EmailInputValidation/EmailInputValidation'
import { useRequestStatus } from '../../../../../hooks/useRequestStatus/useRequestStatus'
import { PickLocation } from '../../../СommonСomponents/PickLocation/PickLocation'
import { useShowError } from '../../../../../hooks/useRequestStatus/useShowError'

export const ProfileUser = () => {
	const [dataUser, setDataUser] = useState({})
	const { throwError } = useShowError()
	const {
		toogleLoading,
		ShowLoader,
	} = useRequestStatus()
	useEffect(() => {
		toogleLoading()
		$api.get('/user')
			.then(e => {
				console.log(e.data)
				setDataUser(e.data.user)

			}).catch(e => throwError(e)).finally(() => toogleLoading())
	}, [])
	console.log(dataUser)
	const infoUser = useRef({
		name: null,
		email: null,
		dateOfBirth: null,
		phoneNumber: null,
		country: null,
		region: null,
		city: null,
	})
	const handleSubmit = (e) => {
		const name = infoUser.current.name.value
		let email = infoUser.current.email.value
		let phoneNumber = infoUser.current.phoneNumber.value
		const country = infoUser.current.country
		const region = infoUser.current.region
		let dateOfBirth = infoUser.current.dateOfBirth
		const city = infoUser.current.city
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
		const userInfo = new UserDto({ name, email, phoneNumber, country, region, dateOfBirth, city })
		console.log(userInfo)
		// eslint-disable-next-line no-restricted-globals
		$api.post('/user/info', userInfo).then(e => { location.reload() }).catch(e => throwError(e))
	}

	return (!dataUser ?
		ShowLoader() :
		<>
			<TitlePages>Ваш профіль</TitlePages>
			<div className='ProfileUser'>
				<AvatarLoader path={routeBack.userAvatarDownload} id={dataUser?.id} />
				<div className='ProfileUser__formWrapper'>
					<div className='ProfileUser__LeftColumn'>
						<NameInputValidation innerRef={el => infoUser.current.name = el} placeholder={dataUser?.name || 'Козак Андрій Михайлович'} />
						<EmailInputValidation innerRef={el => infoUser.current.email = el} placeholder={dataUser?.email || 'you@company.com'} />
						<TellInputValidation innerRef={el => infoUser.current.phoneNumber = el} placeholder={dataUser?.userInfo?.phoneNumber} />

						<Calendar date={dataUser?.userInfo?.dateOfBirth} innerRef={infoUser} />
						<div>
							<PickLocation data={dataUser?.userInfo} infoUser={infoUser} />
							{/* <InputAllUser type={'text'} innerRef={el => infoUser.current.country = el} placeholder={dataUser?.userInfo?.Residence?.country || 'Україна'} inputTitle={'Країна'} /> */}
							{/* <InputAllUser type={'text'} innerRef={el => infoUser.current.region = el} placeholder={dataUser?.userInfo?.Residence?.region || 'Київська область'} inputTitle={'Область'} /> */}
							{/* <InputAllUser type={'text'} innerRef={el => infoUser.current.city = el} placeholder={dataUser?.userInfo?.Residence?.city || 'Київ'} inputTitle={'Місто'} /> */}
						</div>
					</div>
					<div className='ProfileUser__rightColumn'>
						{/* передаём роут для изменения пороля */}
						<RefreshPassword rout={'/user/refresh/password'} />
					</div>
				</div>
				<div className='ProfileUser__buttomWrapper'>
					<Button onClick={handleSubmit}>Зберегти зміни</Button>
				</div>
			</div>
		</>
	)
}

