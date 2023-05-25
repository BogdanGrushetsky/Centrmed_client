import img from '../../../images/doctor.png'
import './CardDoctor.css'
export const CardDoctor = () => {

	return (
		<div className='CardDoctor'>
			<img className='CardDoctor__img' src={img} alt='img' />
			<div className='CardDoctor__logo'></div>
			<div className='CardDoctor__textWrapper'>
				<span className='CardDoctor__name'>Григоренко Оксана Анатоліївна</span>
				<span className='CardDoctor__post'>Педіатр</span>
				<span className='CardDoctor__country'>Київ, Україна</span>
			</div>
		</div>
	)
}