import React, { Suspense } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { Layout } from '../../../components/Layout/Layout'
import { Navigation } from '../../../components/Layout/Navigation/Navigation';
import { Loader } from '../../../components/Loader/Loader';

function UserLayout() {
	const location = useLocation();
	const currentPath = location.pathname;

	if (currentPath === '/user') {

		return <Navigate to='/user/bookedTime' />
	}
	if (localStorage.getItem('role') !== 'patient') {
		return <Navigate to='/' />
	}
	const arrayUserNav = [
		{ title: 'Заброньований час', path: 'bookedTime' },
		{ title: 'Повідомлення та листування', path: 'messages' },
		{ title: 'Профіль', path: 'profile' },
		{ title: 'Амбулаторна карта', path: 'outpatientCard' },
		{ title: 'Мої фінанси', path: 'finances' },
	]

	return (
		<>
			<Navigation tabs={arrayUserNav} />
			<Layout>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Layout>
		</>
	)
}

export default UserLayout