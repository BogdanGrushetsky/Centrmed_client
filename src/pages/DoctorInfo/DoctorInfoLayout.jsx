import React, { Suspense } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout'
import { Navigation } from '../../components/Layout/Navigation/Navigation';
import { Loader } from '../../components/Loader/Loader';

function DoctorInfoLayout() {
	const location = useLocation();
	const currentPath = location.pathname;
	// if (currentPath === '/doctor') {

	// 	return <Navigate to='/doctor/stat' />
	// }
	if (localStorage.getItem('role') !== 'doctor') {
		// return <Navigate to='/' />
	}
	const arrayDoctorNav = [
		{ title: 'Загальна інформація', path: 'profile' },
		{ title: 'Графік лікаря', },
		{ title: 'Список консультацій', path: 'listConsultation' },
		{ title: 'Чат з лікарем', },
	]

	return (
		<>
			<Navigation tabs={arrayDoctorNav} />
			<Layout>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Layout>
		</>
	)
}

export default DoctorInfoLayout