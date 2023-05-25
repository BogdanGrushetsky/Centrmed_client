
import img from '../../../../images/doctor.png';
import './CardTimeConsultation.css'

export const CardTimeConsultation = () => {


	return (
		<div className='CardTimeConsultation'>
			<div>
				<img className='CardTimeConsultation__img' src={img} alt="avatar" />
			</div>
			<div className='CardTimeConsultation__wrapperInfo'>
				<div className='CardTimeConsultation__titleInfo'>
					<span className='CardTimeConsultation__nameInfo'>Григоренко Оксана Анатоліївна</span>
					<span className='CardTimeConsultation__specialityInfo'>Педіатр</span>
				</div>
				<div className='CardTimeConsultation__wrapperTimeInfo'>
					<span>24 грудня 2022</span>
					<span className='CardTimeConsultation__oclockTimeInfo'>12:00</span>
				</div>
			</div>
		</div>
	)
}