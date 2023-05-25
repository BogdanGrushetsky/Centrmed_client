import React, { Suspense } from 'react'

import { SidePanel } from '../../components/AdminPanel/SidePanel/SidePanel';
import { Outlet } from 'react-router-dom';
import { LayoutAdminPanel } from '../../components/AdminPanel/LayoutAdminPanel'
import { Loader } from '../../components/Loader/Loader';
function AdminLayout() {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<SidePanel />
				<LayoutAdminPanel>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</LayoutAdminPanel>
			</div>
		</>
	)
}

export default AdminLayout