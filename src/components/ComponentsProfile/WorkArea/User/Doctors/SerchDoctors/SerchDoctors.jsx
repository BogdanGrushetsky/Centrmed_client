import './SerchDoctors.css'
import { BlockSeach } from '../../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import { SearchMassage } from '../../../../UserComponents/ComponentSearch/SearchMassage/SearchMassage'
import { CheackBox } from '../../../../UserComponents/ComponentSearch/CheackBox/CheackBox'
import { ReactComponent as Bottel } from '../../../../../../icons/bottel.svg';
import React, { lazy, useContext, useEffect, useRef, useState } from 'react'
import { routeUser, routeSpecialist } from '../../../../../../http/routeBack'
import DropDounSerch from '../../../../../DropDounSerch/DropDounSerch'
import { useListUsers } from '../../../../../../hooks/useListUsers'
import { Loader } from '../../../../../Loader/Loader'
import { PickLocation } from '../../../../СommonСomponents/PickLocation/PickLocation'
import { Context } from '../../../../../..';
import { observer } from 'mobx-react-lite';

const DoctorListSerch = lazy(() => import('./DoctorListSerch'))
function SerchDoctors() {
	const { store } = useContext(Context);

	const [selectSpecialiti, setSelectSpecialiti] = useState({})
	const [inputState, setInputState] = useState('')
	const innerRef = useRef({
		region: null,
		city: null
	})
	let aa = store.reredner
	const {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser } = useListUsers(
			`${routeUser.serchDoctor}?`, 'doctor',
			`&specialist=${selectSpecialiti._id ? selectSpecialiti._id : ''}
			&region=${innerRef.current.region ? innerRef.current.region : ''}
			&city=${innerRef.current.city ? innerRef.current.city : ''}
			&serchWord=${inputState}`)

	const changeInput = (e) => { setInputState(e.target.value) }
	return (
		<>
			<div className='SerchDoctors'>
				<BlockSeach>
					<SearchMassage value={inputState} onChange={changeInput} placeholder={'Пошук по ПІБ'} />
					<PickLocation data={{}} infoUser={innerRef} />
					<DropDounSerch
						selectData={selectSpecialiti}
						setSelectData={setSelectSpecialiti}
						rout={routeSpecialist?.getAllSpecialist}
						species={'specialist'}
						svg={<Bottel />} >
						Спеціальність
					</DropDounSerch>
					<CheackBox>Тільки лікарі онлайн</CheackBox>
				</BlockSeach>
				<React.Suspense fallback={<Loader />}>
					<DoctorListSerch goToPrevPage={goToPrevPage}
						goToNextPage={goToNextPage}
						goToPage={goToPage}
						maxPage={maxPage}
						activePage={activePage}
						arrayUser={arrayUser} />
				</React.Suspense>
			</div>
		</>
	)
}
export default observer(SerchDoctors)