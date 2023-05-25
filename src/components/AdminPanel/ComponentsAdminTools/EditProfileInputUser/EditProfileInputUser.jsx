
import { InputAllUser } from '../../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser'
import { Calendar } from '../../../ComponentsProfile/СommonСomponents/Calendar/Calendar'
import { TellInputValidation } from '../../../ComponentsProfile/СommonСomponents/TellInputValidation/TellInputValidation'
import './EditProfileInputUser.css'
import { NameInputValidation } from '../../../ComponentsProfile/СommonСomponents/NameInputValidation/NameInputValidation'
import { EmailInputValidation } from '../../../ComponentsProfile/СommonСomponents/EmailInputValidation/EmailInputValidation'


export const EditProfileInputUser = ({ infoUser, dataUser }) => {
	return (
		<div className='EditProfile__unputUserInterface'>
			<div>
				<div className='EditProfile__titleBlock'>Особиста інформація</div>
				<div className='EditProfile__topUserInterface'>
					<div className={'EditProfile__leftColumnDataEdit'}>
						<NameInputValidation
							innerRef={el => infoUser.current.name = el}
							placeholder={dataUser?.name} />
						<EmailInputValidation innerRef={el => infoUser.current.email = el}
							placeholder={dataUser?.email} />
					</div>
					<div className='EditProfile__rightColumnDataEdit'>
						<TellInputValidation
							innerRef={el => infoUser.current.phoneNumber = el}
							placeholder={dataUser?.userInfo?.phoneNumber}

						/>
						<Calendar
							innerRef={infoUser}
							date={dataUser?.userInfo?.dateOfBirth}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className='EditProfile__topUserInterface'>
					<div className='EditProfile__titleBlock'>Особиста інформація</div>
					<div className='EditProfile__titleBlock password'>Скинути пароль</div>
				</div>
				<div className='EditProfile__topUserInterface'>
					<div className={'EditProfile__leftColumnDataEdit'}>
						<InputAllUser
							inputTitle={'Ім’я на карті'}
							placeholder={dataUser?.nameCard}
							color={'white'}
							name={'nameCard'}
						/>
						<InputAllUser
							inputTitle={'Номер карти'}
							placeholder={dataUser?.numCard}
							color={'white'}
							name={'numCard'}
						/>
					</div>
					<div className='EditProfile__rightColumnDataEdit'>
						<InputAllUser
							innerRef={el => infoUser.current.password = el}
							inputTitle={'Новий пароль'}
							placeholder={'*********'}
							color={'white'}
							name={'password'}
							type={'password'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}