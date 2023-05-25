

import './CardNearestVideoConsultations.css'
export const CardNearestVideoConsultations = ({ img, name, dateVideoCall, dateCreate }) => {

	return (
		<div className='CardNearestVideoConsultations'>
			<img className='CardNearestVideoConsultations__img' src={img} alt='img' />
			<div className='CardNearestVideoConsultations__wrapperText'>
				<div className='CardNearestVideoConsultations__wrapperTopText'>
					<span className='CardNearestVideoConsultations__title'>{name}</span>
					<span className='CardNearestVideoConsultations__deta'>{dateCreate}</span>
				</div>
				<span className='CardNearestVideoConsultations__text' >
					Початок консультації-
					<strong className='CardNearestVideoConsultations__strong'>   {dateVideoCall}</strong>
				</span>
			</div>

		</div>
	)
}