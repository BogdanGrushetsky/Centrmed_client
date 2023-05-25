import { useContext, useState } from 'react'
import { ReactComponent as Plus } from '../../../../icons/buttonDell.svg';
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError';
import './AddSpecialist.css'
import $api from '../../../../http';
import { routeSpecialist } from '../../../../http/routeBack';
import { Context } from '../../../..';
export const AddSpecialist = () => {
	const [inputState, setInputState] = useState('')
	const { throwError } = useShowError()
	const submit = () => {
		// eslint-disable-next-line no-restricted-globals
		$api.post(routeSpecialist.createSpecialist, { specialist: inputState }).then(e => location.reload()).catch(e => throwError(e))
	}
	return (<div>

		<div className='AddSpecialist'>
			<input onChange={(e) => setInputState(e.target.value)} value={inputState} className='AddSpecialist__input' type="text" placeholder='Додати спеціальність' />
			<Plus onClick={submit} className={'AddSpecialist__svg'} />
		</div>
	</div>)
}