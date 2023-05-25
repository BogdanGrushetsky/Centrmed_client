import { useState } from 'react'
import $api from '../../../../http/index'

export const HookRefreshPassword = () => {
	const [stateValidation, setStateValidation] = useState(false)
	const [falseSendToServer, setfalseSendToServer] = useState('')
	const [sucsessRequest, setSucsessRequest] = useState('')
	const handleSubmit = (oldPassword, newPassword, confirmPassword, rout) => {


		if ((oldPassword.length > 4 && newPassword.length > 4 && confirmPassword.length > 4) &&
			newPassword === confirmPassword &&
			oldPassword !== newPassword) {

			const formSend = { oldPassword, newPassword }
			setfalseSendToServer('')

			$api.post(rout, formSend)
				.then(e => {
					setSucsessRequest('Запрос успешно отправлен')
				})
				.catch(e => {
					setSucsessRequest('')
					setfalseSendToServer(e.response.data.message)
				})
			setStateValidation(false)
		} else {
			setSucsessRequest('')
			setfalseSendToServer('')
			setStateValidation(true)
		}
	}

	return {
		handleSubmit,
		stateValidation,
		falseSendToServer,
		sucsessRequest
	}
}