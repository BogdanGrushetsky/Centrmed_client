import React from 'react'

import { ModalProvider } from "react-modal-hook";

import { SidePanel } from '../components/AdminPanel/SidePanel/SidePanel';
import { DoctorsList } from '../components/AdminPanel/AdminTools/DoctorsList/DoctorsList';
import { PasientList } from '../components/AdminPanel/AdminTools/PasientList/PasientList';
import { EditProfile } from '../components/AdminPanel/AdminTools/EditProfile/EditProfile'
import { AllUserList } from '../components/AdminPanel/AdminTools/AllUserList/AllUserList'
import { SiteSetings } from '../components/AdminPanel/AdminTools/SiteSetings/SiteSetings'

function AdminPanel() {
	return (
		<ModalProvider>
			<div style={{ display: 'flex' }}>
				<SidePanel />
				<SiteSetings />
			</div>
		</ModalProvider>
	)
}

export default AdminPanel