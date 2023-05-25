

import './CardMassage.css'
export const CardMassage = ({ img, name, children, date, country }) => {

	return (
		<div className='CardMassage'>
			{img && <img className='CardMassage__img' src={img} alt='img' />}
			<div className='CardMassage__wrapperText'>
				<span className='CardMassage__title'>{name}</span>
				{country && <span className='CardMassage__country'>{country}</span>}
				<span className='CardMassage__text' >{children}</span>
			</div>
			<div className='CardMassage__deta' >
				<span>{date}</span>
			</div>
		</div>
	)
}