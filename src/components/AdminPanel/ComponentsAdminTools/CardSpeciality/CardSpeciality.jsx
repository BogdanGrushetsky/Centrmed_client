import { useState } from 'react';
import { useDeleteHook } from '../../../../hooks/useDeleteHook';
import { ReactComponent as Pen } from '../../../../icons/pan.svg';
import { ReactComponent as Trash } from '../../../../icons/trash.svg';
import './CardSpeciality.css'
import $api from '../../../../http';
import { routeSpecialist } from '../../../../http/routeBack';

import { ReactComponent as Cheach } from '../../../..//icons/cheack.svg';
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError';
export const CardSpeciality = ({ speciality, id }) => {
	const { throwError } = useShowError()
	const [stateInput, setInputState] = useState(speciality)
	const [showInput, setShowInput] = useState(false)
	const {
		openModal,
		Modal } = useDeleteHook(routeSpecialist.deleteSpecialist, id, speciality)
	const toogle = () => {
		setShowInput(state => !state)
	}
	const sendNewName = () => {
		// eslint-disable-next-line no-restricted-globals
		$api.patch(`${routeSpecialist.updateSpecialist}?id=${id}&newName=${stateInput}`).then(e => location.reload()).catch(e => throwError(e))
	}

	return (
		<li className='CardSpeciality'>
			{!showInput ?
				<span>{speciality}</span>
				:
				<>
					<input type='text' className='CardSpeciality__input' value={stateInput} onChange={(e) => setInputState(e.target.value)} />
					<Cheach onClick={sendNewName} className='CardSpeciality__svgCheack' />
				</>
			}
			<div className='CardSpeciality__buttonBlockNav'>
				<Trash onClick={openModal} className='CardSpeciality__svg' />
				<Pen onClick={toogle} className='CardSpeciality__svg' />
			</div>
			<Modal />
		</li>
	)
}