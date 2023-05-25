import { CardSpeciality } from '../../ComponentsAdminTools/CardSpeciality/CardSpeciality'
import { Pagination } from '../../ComponentsAdminTools/Pagination/Pagination'
import { PriceLimit } from '../../ComponentsAdminTools/PriceLimit/PriceLimit'
import './SiteSetings.css'
import { routeSpecialist } from '../../../../http/routeBack'
import { useListUsers } from '../../../../hooks/useListUsers'
import { useState } from 'react'
import { AddSpecialist } from '../../ComponentsAdminTools/AddSpecialist/AddSpecialist'
export const SiteSetings = () => {
	const [inputState, setInputState] = useState('')
	const {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser } = useListUsers(`${routeSpecialist.getSpecialist}?`, 'specialist', `&serchWord=${inputState}`)
	const changeInput = (e) => { setInputState(e.target.value) }

	return (
		<div className='SiteSetings'>
			<div>
				<div className='SiteSetings__navigate'>
					<div>
						<span>Спеціальність</span>
						<input className='SiteSetings__serch' value={inputState} onChange={changeInput} placeholder='Пошук по спеціальності' />
					</div>
					<AddSpecialist />
				</div>
				<div >
					<ul className='SiteSetings__specialityList'>
						{arrayUser?.map((el) => {
							const { specialist, _id } = el
							return <CardSpeciality key={_id} id={_id} speciality={specialist} />
						})}
					</ul>
				</div>
				<Pagination goToPrevPage={goToPrevPage}
					goToNextPage={goToNextPage}
					goToPage={goToPage}
					maxPage={maxPage}
					activePage={activePage} />
			</div>
			<PriceLimit />
		</div >
	)
}