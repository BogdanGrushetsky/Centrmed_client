import { Button } from '../../../../Button/Button'
import { BlockSeach } from '../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import { LayoutCabinet } from '../../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { ReactComponent as Wallet } from '../../../../../icons/wallet.svg';
import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import './FinanceUser.css'

export const FinanceUser = (props) => {

	const tranc = {
		tranc: '12260',
		date: '05 грудня 2022 о 19:15',
		cash: '-170',
		type: 'Сплата',
		desc: 'Оплата при бронюванні консультації',
		sunsecc: true
	}
	const trancFalse = {
		tranc: '12260',
		date: '05 грудня 2022 о 19:15',
		cash: '-170',
		type: 'Сплата',
		desc: 'Refill transaction #79464L-1312-155024608,155024608155024608155024608155024608155024608155024608155024608155024608155024608155024608155024608155024608155024608Amount 170.00 UAH',
		sunsecc: false
	}
	const array = [tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, trancFalse, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc, tranc,]
	return (
		<>
			<div className='FinanceUser'>
				<BlockSeach>
					<div className='FinanceUser__searchWrapper'>
						<h3>Мої фінанси</h3>
						<span>Поточна сума у вас на рахунку</span>
						<span className='FinanceUser__cash'>0.00 UAH</span>
					</div>
					<div className='FinanceUser__wrapperBlock'>
						<div className='FinanceUser__wrapperButton'>
							<Button> <Wallet className='FinanceUser__svgButton' /> Поповнення рахунку</Button>
						</div>
					</div>
				</BlockSeach>
				<TitleActiveBlock>Моя амбулаторна карта</TitleActiveBlock>
				<div className='FinanceUser__finance'>
					<div className='FinanceUser__financeNav'>
						<span className='FinanceUser__nav'>№ Транзакції</span>
						<span className='FinanceUser__nav'>Дата</span>
						<span className='FinanceUser__nav'>Сума</span>
						<span className='FinanceUser__nav'>Тип операції</span>
						<span className='FinanceUser__navDesc'>Примітка</span>
					</div>
					<ul className='FinanceUser__ul'>
						{array.map(item => {
							const { tranc, date, cash, type, desc, sunsecc } = item
							return (
								<li className={`FinanceUser__li ${!sunsecc ? 'false' : ''}`}>
									<span className='FinanceUser__span'>{tranc}</span>
									<span className='FinanceUser__span'>{date}</span>
									<span className='FinanceUser__span'>{cash}</span>
									<span className='FinanceUser__span'>{type}</span>
									<div className='FinanceUser__spanDesc'>{desc}</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</ >
	)
}