import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import { LayoutCabinet } from '../../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { BlockSeach } from '../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import './MessagesCorrespondence.css'
import { SearchMassage } from '../../../UserComponents/ComponentSearch/SearchMassage/SearchMassage'
import { CalendarBlock } from '../../../UserComponents/ComponentSearch/CalendarBlock/CalendarBlock'
import { Button } from '../../../../Button/Button'
import { ReactComponent as Search } from '../../../../../icons/searchWhite.svg';
import { CheackBox } from '../../../UserComponents/ComponentSearch/CheackBox/CheackBox';
import { TogleBlock } from '../../../UserComponents/ComponentSearch/TogleBlock/TogleBlock'
import img from '../../../../../images/doctor.png'
import { CardMassage } from '../../../UserComponents/CardMassage/CardMassage'

export const MessagesCorrespondence = (props) => {
	const massage = {
		img,
		name: 'Григоренко О.А.',
		date: '13 грудня 2022 о 10:12',
		word: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aspernatur voluptas quos! Perferendis facere optio aspernatur harum nostrum, eaque quibusdam itaque consectetur laborum dignissimos excepturi eligendi voluptas saepe! Ea, quaerat!'
	}
	const array = [massage, massage, massage, massage, massage, massage, massage, massage, massage, massage, massage, massage, massage, massage, massage]
	return (
		<>
			<TogleBlock MassageActive={true} />
			<div className='MessagesCorrespondence'>
				<BlockSeach>
					<SearchMassage placeholder={"Пошук за списком повідомлень"} />
					<CalendarBlock />
					<CheackBox>Показати непрочитані повідомлення</CheackBox>
					<div className='MessagesCorrespondence__wrapperBlock' >
						<div className='MessagesCorrespondence__buttonBlock'>
							<Button><Search className='MessagesCorrespondence__svg' /> Пошук</Button>
						</div>
					</div>
				</BlockSeach>
				<TitleActiveBlock>Повідомлення </TitleActiveBlock>
				<div className='MessagesCorrespondence__massageWindow'>
					{array?.map((item, i) => {
						const { img, name, date, word } = item
						return (
							<CardMassage key={i} img={img} name={name} date={date} >
								{word}
							</CardMassage>
						)
					})}

				</div>
			</div>
		</>

	)
}