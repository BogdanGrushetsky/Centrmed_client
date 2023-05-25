import { ReactComponent as MyLogo } from '../../../icons/CentrmedLogo.svg';
import { Button } from '../../Button/Button'
import './LoginAdminPanel.css'
import { InputAllUser } from '../../ComponentsProfile/СommonСomponents/InputAllUser/InputAllUser'
import { useRef } from 'react'
function LoginAdminPanel() {
	const innerRef = useRef({
		login: '',
		password: ''
	})
	const useSubmit = (event) => {
		event.preventDefault();
		console.log(innerRef.current)
	}

	return (
		<div className='LoginAdminPanel__WrapperPage'>
			<form onSubmit={useSubmit} className='LoginAdminPanel__forma'>
				<div className='LoginAdminPanel__logo'><MyLogo /> <h2>CenterMed</h2></div>
				<InputAllUser innerRef={el => innerRef.current.login = el} inputTitle={'Login'} type={'text'} />
				<InputAllUser innerRef={el => innerRef.current.password = el} inputTitle={'Password'} type={'password'} />
				<Button>Sign Up</Button>
			</form>
		</div>
	)
}
export default LoginAdminPanel