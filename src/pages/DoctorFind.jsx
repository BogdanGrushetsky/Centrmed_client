import React from 'react'
import Header from '../components/Header/Header'
import { ModalProvider } from "react-modal-hook";
import { FindDoctor } from '../components/ComponentsProfile/WorkArea/User/FindDoctor/FindDoctor'
import Footer from '../components/Footer/Footer'

function DoctorFind() {
	return (
		<ModalProvider>
			<Header />
			<FindDoctor />
			<Footer />
		</ModalProvider>
	)
}

export default DoctorFind