import { ReactComponent as DollarIcon } from '../../../../icons/dollarIcon.svg';
import { ReactComponent as Watch } from '../../../../icons/watch.svg';
import { InputAllUser } from '../../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser'
import { Calendar } from '../../../ComponentsProfile/СommonСomponents/Calendar/Calendar'
import { TellInputValidation } from '../../../ComponentsProfile/СommonСomponents/TellInputValidation/TellInputValidation'
import './EditProfileInputDoctor.css'
import { SearchBlock } from '../../../ComponentsProfile/UserComponents/SearchBlock/SearchBlock';
import { TextAreaAllUser } from '../../../ComponentsProfile/СommonСomponents/TextAreaAllUser/TextAreaAllUser';
import { ShowFileDoctor } from '../../../ShowFileDoctor/ShowFileDoctor';
import { NameInputValidation } from '../../../ComponentsProfile/СommonСomponents/NameInputValidation/NameInputValidation';
import { EmailInputValidation } from '../../../ComponentsProfile/СommonСomponents/EmailInputValidation/EmailInputValidation';
import { InputNumberWithText } from '../../../InputNumberWithText/InputNumberWithText';


export const EditProfileInputDoctor = ({ dataDoctor, arraySpesialist, infoDoctor }) => {

	const { name, email, priceConsultation, blanceMoney, timeWork, specialist, pathFile } = dataDoctor
	const { phoneNumber, dateOfBirth, bio } = dataDoctor?.doctorInfo
	return (
		<div className='EditProfile__dataEditBlock'>
			<div className={'EditProfile__leftColumnDataEdit'}>
				<div>
					<div className='EditProfile__titleBlock'>Особиста інформація</div>
					<NameInputValidation innerRef={el => infoDoctor.current.name = el} placeholder={name} />
					<EmailInputValidation innerRef={el => infoDoctor.current.email = el} placeholder={email} />
					<TellInputValidation
						innerRef={el => infoDoctor.current.phoneNumber = el}
						placeholder={phoneNumber} />
					<Calendar
						innerRef={infoDoctor}
						date={dateOfBirth} />
				</div>
				{/* <div>
					<div className='EditProfile__titleBlock'>Платіжна інформація</div>
					<div>
						<InputAllUser
							inputTitle={'Ім’я на карті'}
							placeholder={nameCard}
							color={'white'}
							name={'nameCard'}
						/>
						<InputAllUser
							inputTitle={'Номер карти'}
							placeholder={numCard}
							color={'white'}
							name={'numCard'}
						/>
					</div>
				</div> */}

				<div className='EditProfile__numberWrapper'>
					<InputNumberWithText
						innerRef={el => infoDoctor.current.workExperience = el}
						placeholder={dataDoctor?.doctorInfo?.workExperience || '10'}
						text={'років'}
						inputTitle={'Стаж роботи'} />

					<InputNumberWithText
						text={'грн'}
						innerRef={el => infoDoctor.current.consultationPrice = el}
						placeholder={dataDoctor?.consultationPrice || '200'}
						inputTitle={'Ціна консультації'} />

				</div>
				<InputAllUser
					type={'text'}
					innerRef={el => infoDoctor.current.acceptsInClinics = el}
					placeholder={dataDoctor?.doctorInfo?.acceptsInClinics || 'AVIMED Медичний центр'}
					inputTitle={'Клініки в яких приймаю'} />
				<InputAllUser
					type={'text'}
					innerRef={el => infoDoctor.current.study = el}
					placeholder={dataDoctor?.doctorInfo?.study || 'Національний медичний університет імені О.О. Богомольця (2003)'}
					inputTitle={'Назва навчального закладу де ви вчилися'} />
				<TextAreaAllUser
					innerRef={el => infoDoctor.current.bio = el}
					title={"Редагування опис лікаря"}
					placeholder={bio} />
			</div>
			<div className='EditProfile__rightColumnDataEdit'>
				<div className='Forma__text'>Спеціалізація <strong className='Forma__redText'> (Перша обрана спеціальність буде основною)</strong> </div>
				<SearchBlock innerRef={infoDoctor} selectDoctorSpecialist={specialist} arraySpecilist={arraySpesialist} />
				<div className='EditProfile__titleBlock'>Скинути пароль</div>
				<InputAllUser
					innerRef={el => infoDoctor.current.password = el}
					inputTitle={'Новий пароль'}
					placeholder={'*********'}
					color={'white'}
					name={'password'}
					type={'password'}
				/>

				<div>
					<div className='EditProfile__titleBlock'>Ціна за консультація</div>
					<div className='EditProfile__prise'>{priceConsultation} Грн - одна консультація</div>
				</div>

				<div className='EditProfile__zagl'>
					<div className='EditProfile__titleBlock'>Дипломи та сертифікати</div>
					<ShowFileDoctor permission={true} arrayFile={pathFile} />
				</div>
				<div>
					<div className='EditProfile__titleBlock'>Статистика</div>
					<div className='EditProfile__statistikWrapper'>
						<div className='EditProfile__showStatsBlock' >
							<span>Відпрацьовані години</span>
							<span className='EditProfile__numberStatik'><Watch className='EditProfile__svgStatik' /> {timeWork}</span>
						</div>
						<div className='EditProfile__showStatsBlock' >
							<span> Баланс</span>
							<div className='EditProfile__numberStatik'><DollarIcon className='EditProfile__svgStatik' /> <span>{blanceMoney}</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}