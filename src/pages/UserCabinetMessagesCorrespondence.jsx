import React from 'react'
import Header from '../components/Header/Header'
import { ModalProvider } from "react-modal-hook";
import Footer from '../components/Footer/Footer'
import { FindDoctor } from '../components/ComponentsProfile/WorkArea/User/FindDoctor/FindDoctor'

function UserCabinetMessagesCorrespondence() {
	return (
		<ModalProvider>
			<Header />
			<FindDoctor />
			<Footer />
		</ModalProvider>
	)
}

export default UserCabinetMessagesCorrespondence