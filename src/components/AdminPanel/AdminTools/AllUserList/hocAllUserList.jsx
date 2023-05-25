
import { Pagination } from '../../ComponentsAdminTools/Pagination/Pagination'
import { CardAdminPanel } from '../../ComponentsAdminTools/CardAdminPanel/CardAdminPanel'
import { TableNav } from '../../ComponentsAdminTools/TableNav/TableNav'
import { useListUsers } from '../../../../hooks/useListUsers'
import { useState } from 'react'
export const HocAllUserList = ({ route, role }) => {
	const [stateInput, setStateInput] = useState('')
	const {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser
	} = useListUsers(route + '?', role, `&serchWord=${stateInput}`)




	return (
		<>
			<div>
				<TableNav setInput={setStateInput} stateInput={stateInput} role={role} />
				<ul className='TablesUser__list' >
					{arrayUser?.map((item) => {
						const { name, scenario, verified, email, updatedAt, img, id } = item
						return (
							<CardAdminPanel id={id} key={id} status={verified} time={updatedAt} name={name} role={scenario} email={email} img={img} />
						)
					})}
				</ul>
			</div>
			<Pagination goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				goToPage={goToPage}
				maxPage={maxPage}
				activePage={activePage} />
		</>
	)



}