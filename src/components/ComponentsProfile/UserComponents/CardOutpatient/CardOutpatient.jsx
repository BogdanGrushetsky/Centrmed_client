import { ReactComponent as Shape } from '../../../../icons/shape.svg';
import { ReactComponent as DouwloadGreen } from '../../../../icons/douwloadGreen.svg';
import { ReactComponent as Telegram } from '../../../../icons/telegram.svg';
import { ReactComponent as Pan } from '../../../../icons/pan.svg';

import './CardOutpatient.css'

export const CardOutpatient = ({ children }) => {
	const promo = {
		nameFile: 'Висновок',
		tag: 'tag',
		author: 'Григоренко О.А. ',
		date: '22 грудня 2022 0 9:15'
	}
	const array = [promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo, promo,]

	return (

		<div className='CardOutpatient'>
			<div className='CardOutpatient__tablNav'>
				<span className='CardOutpatient__nav'>Ім’я файлу</span>
				<span className='CardOutpatient__nav'>Теги</span>
				<span className='CardOutpatient__nav'>Автор</span>
				<span className='CardOutpatient__nav'>Доданий</span>
				<span className='CardOutpatient__nav'>Дії</span>
			</div>
			{array?.map(item => {
				const { nameFile, author, date, tag } = item
				return (
					<ul key={(Math.random() * Math.pow(36, 6) | 0).toString(36)} className='CardOutpatient__ul'>
						<li className='CardOutpatient__li'>
							<div>
								<Shape className='CardOutpatient__nameSvg' />
								<span>{nameFile}</span>
							</div>
						</li>
						<li className='CardOutpatient__li'>
							<span>{tag ? tag : ' '}</span>
						</li>
						<li className='CardOutpatient__li'>
							<span>{author}</span>
						</li>
						<li className='CardOutpatient__li'>
							<span>{date}</span>
						</li>
						<li className='CardOutpatient__libutton'>
							<DouwloadGreen />
							<Telegram />
							<Pan />
						</li>
					</ul>
				)
			})}
		</div>
	)
}