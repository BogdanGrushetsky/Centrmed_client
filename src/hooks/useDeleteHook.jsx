import { useState } from 'react';
import $api from '../http';
import './useDeleteHook.css'
import { useShowError } from './useRequestStatus/useShowError';
export const useDeleteHook = (rout, id, name) => {
	const { throwError } = useShowError()
	const [alert, setAlert] = useState(false)

	const closeModal = () => {
		setAlert(false)
	}
	const openModal = () => {
		setAlert(true)
	}
	const deleteFunction = (rout, id) => {
		$api.delete(`${rout}${id}`).then(e => {
			// eslint-disable-next-line no-unused-expressions, no-restricted-globals
			location.reload()
		}).catch(e => throwError(e))
	}
	const Modal = () => {
		return (
			alert && <div onMouseLeave={closeModal} className='CardAdminPanel__wrapperModal'>
				<span>Ви впевнені що хочете видалити ?</span>
				<span>{name || 'user'}</span>
				<div className='CardAdminPanel__wrapperButtons'>
					<button onClick={() => deleteFunction(rout, id)} className='CardAdminPanel__button' >Так</button>
					<button onClick={closeModal} className='CardAdminPanel__button left'>Ні</button>
				</div>
			</div>
		)
	}
	return {
		openModal,
		closeModal,
		Modal,
		alert
	}

}