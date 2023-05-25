import { routeAdmin } from '../../../../http/routeBack'
import { Pagination } from '../../ComponentsAdminTools/Pagination/Pagination'
import { CardAdminPanel } from '../../ComponentsAdminTools/CardAdminPanel/CardAdminPanel'
import { TableNav } from '../../ComponentsAdminTools/TableNav/TableNav'
import './DoctorsList.css'
import { useListUsers } from '../../../../hooks/useListUsers'
import { useState } from 'react'
export const DoctorsList = () => {
	const [stateInput, setStateInput] = useState('')
	const {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser } = useListUsers(routeAdmin.getDoctors + '?', 'doctor', `&serchWord=${stateInput}`)
	console.log(stateInput)
	return (
		<div className='List'>
			<div>
				<TableNav stateInput={stateInput} setInput={setStateInput} role={'doctor'} statusNav={'doctor'} />
				<ul className='TablesUser__list' >

					{arrayUser?.map((item) => {
						const { name, verified, scenario, email, img, id } = item
						return (
							<CardAdminPanel id={id} status={verified} key={id} name={name} role={scenario} email={email} img={img} />
						)
					})}
				</ul>
			</div>
			<Pagination
				goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				goToPage={goToPage}
				maxPage={maxPage}
				activePage={activePage} />

		</div>
	)
}
