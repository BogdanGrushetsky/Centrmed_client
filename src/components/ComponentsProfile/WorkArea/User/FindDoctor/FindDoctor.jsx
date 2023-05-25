
import { SearchMassage } from '../../../UserComponents/ComponentSearch/SearchMassage/SearchMassage'

import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import { CardMassage } from '../../../UserComponents/CardMassage/CardMassage'
import img from '../../../../../images/doctor.png'
import { NearestVideoConsultations } from '../../../UserComponents/NearestVideoConsultations/NearestVideoConsultations'
import './FindDoctor.css'
import { Suspense, lazy } from 'react'
import { Loader } from '../../../../Loader/Loader'
const MyDoctorBlock = lazy(() => import('./MyDoctorBlock'))

export const FindDoctor = (props) => {
	const massage = {
		country: 'Україна, Київ',
		price: 170,
		img,
		speciality: 'Педіатр',
		name: 'Григоренко О.А.',
		date: '13 грудня 2022 о 10:12',
		word: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aspernatur voluptas quos! Perferendis facere optio aspernatur harum nostrum, eaque quibusdam itaque consectetur laborum dignissimos excepturi eligendi voluptas saepe! Ea, quaerat!'
	}
	const vidoCall = {
		dateCreate: '22 грудня 2022 о 13:24',
		dateVideoCall: '28 грудня 2022 о 16:00',
		massage
	}
	const array = [massage, massage, massage, massage, massage, massage, massage, massage]
	const ArrayVideoCall = [vidoCall, vidoCall, vidoCall, vidoCall,]

	return (
		<>
			<div className='FindDoctor'>
				<div className='FindDoctor__titlePage'>
					<h2 >Знайдіть лікаря</h2>
					<SearchMassage placeholder='Введіть прізвище або спеціальність лікаря' />
				</div>
				<div className='FindDoctor__blockSeachWrapper'>
					<NearestVideoConsultations array={ArrayVideoCall} />
					<Suspense fallback={<Loader />}>
						<MyDoctorBlock />
					</Suspense>
				</div>
				<TitleActiveBlock>Повідомлення та листування </TitleActiveBlock>
				<div className='FindDoctor__massageWindow '>
					{array.map(item => {
						const { img, name, date, word } = item
						return (
							<CardMassage img={img} name={name} date={date} >
								{word}
							</CardMassage>
						)
					})}
				</div>
			</div>
		</>
	)
}