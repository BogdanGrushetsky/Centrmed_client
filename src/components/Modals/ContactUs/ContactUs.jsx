import { Button } from '../../Button/Button'
import { CheackBox } from '../../ComponentsProfile/UserComponents/ComponentSearch/CheackBox/CheackBox'
import { EmailInputValidation } from '../../ComponentsProfile/СommonСomponents/EmailInputValidation/EmailInputValidation'
import { InputAllUser } from '../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser'
import { TellInputValidation } from '../../ComponentsProfile/СommonСomponents/TellInputValidation/TellInputValidation'
import { TextAreaAllUser } from '../../ComponentsProfile/СommonСomponents/TextAreaAllUser/TextAreaAllUser'
import { ReactComponent as Exit } from '../../../icons/closeButton.svg';

import './ContactUs.css'
export const ContactUs = ({ hideAuth }) => {
	const handleSubmit = (event) => {

		console.log(event.state)
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit} className='ContactUs'>
			<div className='ContactUs__wrapper'>
				<div className='ContactUs__wrapperSpan' >
					<span className='ContactUs__title'>Зв’язок з нами</span>
					<span>Ми будемо раді почути від вас. Будь ласка, заповніть цю форму.</span>
				</div>
				<div className='ContactUs__text'>
					<InputAllUser type={'text'} inputTitle={'Ваше Ім’я'} placeholder={'Олександр'} />
					<InputAllUser type={'text'} inputTitle={'Прізвище'} placeholder={'Дутов'} />
				</div>
				<div className='ContactUs__ffl'>
					<EmailInputValidation placeholder={'you@company.com'} />
					<TellInputValidation placeholder={'+380 63 887 87 87'} />
				</div>
				<TextAreaAllUser title={'Повідомлення або пропозиція'} />
				<CheackBox>
					Ви погоджуєтеся з нашою доброзичливою політикою конфіденційності.
				</CheackBox>
				<Button> Відправити повідомлення</Button>
			</div>
			<Exit onClick={hideAuth} className='ContactUs__button' />
		</form>)
}