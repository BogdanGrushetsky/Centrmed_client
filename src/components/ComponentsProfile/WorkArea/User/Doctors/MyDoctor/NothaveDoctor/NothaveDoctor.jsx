import { Button } from '../../../../../../Button/Button'
import { TitlePages } from '../../../../../СommonСomponents/TitlePages/TitlePages'
import { InputAllUser } from '../../../../../СommonСomponents/InputAllUser/InputAllUser'
import './NothaveDoctor.css'

export const NothaveDoctor = () => {


	return (
		<>
			<div className='NothaveDoctor__titleWrapper'>
				<TitlePages>Запросіть свого лікаря для отримання онлайн консультації</TitlePages>
			</div>
			<div className='NothaveDoctor__inputWrapperBlock'>
				<div className='NothaveDoctor__inputWrapper'>
					<InputAllUser type={'text'} inputTitle={'Прізвище'} />
					<InputAllUser type={'text'} inputTitle={'Ім‘я'} redText={'(Обов’язково)'} />
					<InputAllUser type={'text'} inputTitle={'По батькові'} />
					<InputAllUser type={'email'} inputTitle={'Email'} />
					<InputAllUser type={'number'} inputTitle={'Номер телефону'} redText={'(Обов’язково)'} />
					<InputAllUser type={'text'} inputTitle={'Як вас представити'} redText={'(Обов’язково)'} />
					<div className='NothaveDoctor__buttonWrapper'>
						<Button>Відправити</Button>
					</div>
				</div>
			</div>
		</>
	)
}