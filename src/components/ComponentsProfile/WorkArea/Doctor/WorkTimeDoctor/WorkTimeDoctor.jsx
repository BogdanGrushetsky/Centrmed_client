import { StatBlock } from '../../../СommonСomponents/StatBlock/StatBlock'
import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import { CheackBox } from '../../../UserComponents/ComponentSearch/CheackBox/CheackBox'
import { Button } from '../../../../Button/Button'
import './WorkTimeDoctor.css'

export const WorkTimeDoctor = () => {



	return (
		<div className='WorkTimeDoctor'>
			<StatBlock timeWork={43} blanceMoney={5160} />
			<div className='WorkTimeDoctor__wrapper'>
				<div className='WorkTimeDoctor__title'>Вивести кошти</div>
				<div className='WorkTimeDoctor__nameHeader'>Доступна сума</div>
				<span className='WorkTimeDoctor__num'>5160 Грн</span>
				<div >
					<div className='WorkTimeDoctor__nameHeader'>Спосіб виводу коштів</div>
					<span>Платіжна карта Mono Bank **** **** **** 4567</span>
				</div>
				<div className='WorkTimeDoctor__nameHeader'>Сума</div>
				<div className='WorkTimeDoctor__cheackWrapper'>
					<CheackBox>5160 Грн</CheackBox>
					<CheackBox>Інша сума</CheackBox>
				</div>
				<div className='WorkTimeDoctor__moneyWrapper'>
					<span>Комісія за преказ коштів на свою карту </span>
					<span>0.00 Грн</span>
				</div>
				<div className='WorkTimeDoctor__moneyWrapper'>
					<div className='WorkTimeDoctor__nameHeader'>Загальна сума</div>
					<span className='WorkTimeDoctor__num'>5160 Грн</span>
				</div>
				<div className='WorkTimeDoctor__wrapperButton'>
					<Button>Отримати оплату зараз</Button>
					<div className='WorkTimeDoctor__redButtonWrapper'><Button color={'red'} >Відміна</Button></div>
				</div>
			</div>
		</div>
	)
}