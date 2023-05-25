import React, { Suspense } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { Layout } from '../../../components/Layout/Layout'
import { Navigation } from '../../../components/Layout/Navigation/Navigation';
import { Loader } from '../../../components/Loader/Loader';

function UserLayout() {
	const location = useLocation();
	const currentPath = location.pathname;

	if (currentPath === '/doctors') {

		return <Navigate to='/doctors/myDoctors' />
	}
	if (localStorage.getItem('role') !== 'patient') {
		return <Navigate to='/' />
	}
	const arrayUserNavs = [
		{ title: 'Мої лікарі', path: 'myDoctors' },
		{ title: 'Пошук лікаря', path: 'searchDoctor' },
		{ title: 'Запросити лікаря', path: 'requestDoctor' },
	]

	return (
		<>
			<Navigation tabs={arrayUserNavs} />
			<Layout>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Layout>
		</>
	)
}

export default UserLayout