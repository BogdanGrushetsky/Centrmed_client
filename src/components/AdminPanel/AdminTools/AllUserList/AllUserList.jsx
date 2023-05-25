
import { useState } from 'react'
import './AllUserList.css'
import { routeAdmin } from '../../../../http/routeBack'
import { HocAllUserList } from './hocAllUserList'
export const AllUserList = () => {
	const [roleList, setRoleList] = useState(false)

	const changeOnDoctor = () => {
		setRoleList(false)
	}
	const useChangeOnUser = () => {
		setRoleList(true)
	}
	return (
		<div className='List'>
			<div className='AllUserList__wrapperButton'>
				<button onClick={changeOnDoctor} className={`AllUserList__button left ${!roleList ? 'active' : ''}`}>Лікарі</button>
				<button onClick={useChangeOnUser} className={`AllUserList__button ${roleList ? 'active' : ''}`}>Пацієнти</button>
			</div>
			<HocAllUserList route={!roleList ? routeAdmin.getFilterDoctors : routeAdmin.getFilterUsers} role={!roleList ? 'doctor' : 'pasient'} />

		</div>
	)
}