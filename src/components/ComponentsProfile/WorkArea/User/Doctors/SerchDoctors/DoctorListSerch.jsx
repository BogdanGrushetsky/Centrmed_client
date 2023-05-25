import React from 'react';
import { TitleActiveBlock } from '../../../../UserComponents/TitleActiveBlock/TitleActiveBlock';
import { CardRetingDoctor } from '../../../../UserComponents/CardRetingDoctor/CardRetingDoctor';
import { Pagination } from '../../../../../AdminPanel/ComponentsAdminTools/Pagination/Pagination';



export default React.memo(function DoctorListSerch({ arrayUser, goToPrevPage, goToNextPage, goToPage, maxPage, activePage }) {
	return (
		<div>
			<TitleActiveBlock>За рейтингом</TitleActiveBlock>
			<div className='FindDoctors__wrapperCart'>
				{arrayUser?.map((item, i) => {
					const { id, price, mainSpecialist, name, country, rate, region, city } = item
					return (
						<CardRetingDoctor key={i} city={city} rate={rate} id={id} price={price} region={region} country={country} speciality={mainSpecialist} name={name} />
					)
				})}
			</div>
			<Pagination goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				goToPage={goToPage}
				maxPage={maxPage}
				activePage={activePage} />
		</div>
	)
})