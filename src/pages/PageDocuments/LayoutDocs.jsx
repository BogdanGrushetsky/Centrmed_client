import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './DocsLayout.css'
import CentrmedLogo from './../../icons/CentrmedLogo.svg'
import { Loader } from '../../components/Loader/Loader';

function LayoutDocs() {


	return (
		<>
			<header className='header'>
				< NavLink to='/'>
					<div className='header_block'>
						<img src={CentrmedLogo} alt="Logo" />
						<span>CentrMed</span>
					</div>
				</NavLink>
			</header>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	)
}

export default LayoutDocs