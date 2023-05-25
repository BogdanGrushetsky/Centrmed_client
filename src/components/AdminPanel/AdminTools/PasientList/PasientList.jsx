import { Pagination } from '../../ComponentsAdminTools/Pagination/Pagination'
import { routeAdmin } from '../../../../http/routeBack'
import { CardAdminPanel } from '../../ComponentsAdminTools/CardAdminPanel/CardAdminPanel'
import { TableNav } from '../../ComponentsAdminTools/TableNav/TableNav'
import { useListUsers } from '../../../../hooks/useListUsers'
import { useState } from 'react'
export const PasientList = () => {
	const [stateInput, setStateInput] = useState('')
	const {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser } = useListUsers(routeAdmin.getUsers + '?', 'user', `&serchWord=${stateInput}`)
	return (
		<div className='List'>
			<div>
				<TableNav setInput={setStateInput} stateInput={stateInput} role={'pasient'} statusNav={'pasient'} />
				<ul className='TablesUser__list' >
					{
						arrayUser?.map((item) => {
							const { name, scenario, email, img, id } = item
							return (
								<CardAdminPanel id={id} key={id} name={name} role={scenario} email={email} img={img} />
							)
						})}
				</ul>
			</div>
			<Pagination goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				goToPage={goToPage}
				maxPage={maxPage}
				activePage={activePage} />

		</div>
	)
}