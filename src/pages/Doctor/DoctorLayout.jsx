import React, { Suspense } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout'
import { Navigation } from '../../components/Layout/Navigation/Navigation';
import { Loader } from '../../components/Loader/Loader';

function DoctorLayout() {
	const location = useLocation();
	const currentPath = location.pathname;
	if (currentPath === '/doctor') {
		return <Navigate to='/doctor/stat' />
	}
	if (localStorage.getItem('role') !== 'doctor') {
		return <Navigate to='/' />
	}
	const arrayDoctorNav = [
		{ title: 'Заброньований час', path: 'stat' },
		{ title: 'Відпрацьований час', path: 'workTime' },
		{ title: 'Профіль', path: 'profile' },
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

export default DoctorLayout