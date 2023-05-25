import { Button } from '../../../Button/Button'
import { InputFile } from '../InputFile/InputFile'
import { InputAllUser } from '../../СommonСomponents/InputAllUser/InputAllUser'
import { TextAreaAllUser } from '../../СommonСomponents//TextAreaAllUser/TextAreaAllUser'
import './Forma.css'
import { AvatarLoader } from '../../СommonСomponents/AvatarLoader/AvatarLoader';
import { SearchBlock } from '../../UserComponents/SearchBlock/SearchBlock'
import { RefreshPassword } from '../RefreshPassword/RefreshPassword'
import { HookFormaData } from './HookFormaData'
import { useRef } from 'react'
import { routeBack } from '../../.././../http/routeBack'
import { ReactComponent as Cheack } from '../../../../icons/cheack.svg'
import { TellInputValidation } from '../../СommonСomponents/TellInputValidation/TellInputValidation'
import { PickLocation } from '../../СommonСomponents/PickLocation/PickLocation'
import { SpecialityBlock } from '../../../SpecialityBlock/SpecialityBlock'
import { Calendar } from '../../СommonСomponents/Calendar/Calendar'
import { ShowFileDoctor } from '../../../ShowFileDoctor/ShowFileDoctor'
import { NameInputValidation } from '../../СommonСomponents/NameInputValidation/NameInputValidation'
import { EmailInputValidation } from '../../СommonСomponents/EmailInputValidation/EmailInputValidation'
import { InputNumberWithText } from '../../../InputNumberWithText/InputNumberWithText'
export const Forma = () => {
	const { ShowLoader,
		arraySpecilist,
		dataDoctor,
		handleSubmit } = HookFormaData()
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
		acceptsInClinics: null,
		consultationPrice: null,
		workExperience: null,
		study: null
	})
	console.log(dataDoctor)
	return (
		<>{!dataDoctor ? ShowLoader() :
			<div className='Forma'>
				<AvatarLoader path={routeBack.doctorAvatarDownload} id={dataDoctor?.id} />
				<div className='Forma__formWrapper'>
					<div className='Forma__LeftColumn'>
						<NameInputValidation placeholder={dataDoctor?.name || 'Козак Андрій Михайлович'} innerRef={el => infoDoctor.current.name = el} />
						<EmailInputValidation innerRef={el => infoDoctor.current.email = el} placeholder={dataDoctor?.email || 'you@company.com'} />
						<TellInputValidation innerRef={el => infoDoctor.current.phoneNumber = el} placeholder={dataDoctor?.doctorInfo?.phoneNumber} />
						<Calendar date={dataDoctor?.doctorInfo?.dateOfBirth} innerRef={infoDoctor} />
						<div>
							<PickLocation data={dataDoctor?.doctorInfo} infoUser={infoDoctor} />
							{/* <InputAllUser type={'text'} innerRef={el => infoDoctor.current.country = el} placeholder={dataDoctor?.doctorInfo?.Residence?.country || 'Україна'} inputTitle={'Країна'} />
							<InputAllUser type={'text'} innerRef={el => infoDoctor.current.region = el} placeholder={dataDoctor?.doctorInfo?.Residence?.region || 'Хмельницька'} inputTitle={'Область'} />
							<InputAllUser
								type={'text'}
								innerRef={el => infoDoctor.current.city = el}
								placeholder={dataDoctor?.doctorInfo?.Residence?.city || 'Київ'}
								inputTitle={'Місто'} /> */}
							<TextAreaAllUser
								innerRef={el => infoDoctor.current.bio = el}
								placeholder={dataDoctor?.doctorInfo?.bio || 'Професійний лікар з досвідом роботи більше 10 років.'}
								title={'Розкажіть про себе як про спеціаліста'} />
							<InputAllUser
								type={'text'}
								innerRef={el => infoDoctor.current.study = el}
								placeholder={dataDoctor?.doctorInfo?.study || 'Національний медичний університет імені О.О. Богомольця (2003)'}
								inputTitle={'Назва навчального закладу де ви вчилися'} />
							<div>
								{
									!dataDoctor?.specialist?.length ?
										<>
											<div className='Forma__text'>Спеціалізація <strong className='Forma__redText'> (Можна вибрати декілька)</strong> </div>
											<SearchBlock innerRef={infoDoctor} arraySpecilist={arraySpecilist} />
										</>
										:
										<>
											<div className='Forma__text'>Ваша спеціалізація</div>
											<span><br />Якщо вам потрібно додати спеціальність, напишіть Адміністратору</span>
											<div className='Forma__wrapperSpecialist'>
												{dataDoctor.specialist.map((el, i) =>

													<SpecialityBlock main={i === 0} key={i}>
														{el.specialist}
													</SpecialityBlock>
												)}
											</div>
										</>
								}
							</div>
						</div>
					</div>
					<div className='Forma__rightColumn'>
						<InputAllUser
							type={'text'}
							innerRef={el => infoDoctor.current.acceptsInClinics = el}
							placeholder={dataDoctor?.doctorInfo?.acceptsInClinics || 'AVIMED Медичний центр'}
							inputTitle={'Клініки в яких приймаю'} />
						<div className='Forma__numberInputWrapper'>
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
						<div className='Forma__wrapperFile'>
							{dataDoctor?.pathFile?.length === 0 ?
								<>	<span className='Forma__text'>Диплом або документи які підтверджують що ви лікар </span>
									<ul>
										<li className='Forma__li'>Копія паспорта</li>
										<li className='Forma__li'>Індентифікаційний код</li>
										<li className='Forma__li'>Дипломи</li>
										<li className='Forma__li'>Ліцензії</li>
										<li className='Forma__li'>Сертифікати</li>

									</ul>
									<InputFile rout={routeBack.doctorDownloadFile} />
								</>
								:
								<div>

									<div className='Forma__text'>
										<Cheack className='Forma__svgCheakBlock' />
										<span> Ваші документи завантажені</span>
									</div>
									<ShowFileDoctor arrayFile={dataDoctor?.pathFile} />
									<div className='Forma__textCheakBlock'>Для додаткового завантаження або видалення файлів зверніться до Адміністратору </div>
								</div>}
						</div>
						{/* передаём роут на изменения пороля  */}
						<RefreshPassword rout={routeBack.doctorRefreshPassword} />
					</div>
				</div>
				<div className='Forma__buttomWrapper'>
					<Button onClick={() => handleSubmit(
						infoDoctor.current.name.value,
						infoDoctor.current.email.value,
						infoDoctor.current.phoneNumber.value,
						infoDoctor.current.country,
						infoDoctor.current.region,
						infoDoctor.current.dateOfBirth,
						infoDoctor.current.city,
						infoDoctor.current.bio.value,
						infoDoctor.current.specialist,
						infoDoctor.current.acceptsInClinics.value,
						infoDoctor.current.consultationPrice.value,
						infoDoctor.current.workExperience.value,
						infoDoctor.current.study.value,
					)} >Зберегти зміни</Button>
				</div>
			</div>}</>
	)
}
