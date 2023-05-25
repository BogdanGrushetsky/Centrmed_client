import React from 'react'
import Header from '../components/Header/Header'
import { ModalProvider } from "react-modal-hook";
import { OutpatientСard } from '../components/ComponentsProfile/WorkArea/User/OutpatientСard/OutpatientСard'
import Footer from '../components/Footer/Footer'

function CardOutpatient() {
	return (
		<ModalProvider>
			<Header />
			<OutpatientСard />
			<Footer />
		</ModalProvider>
	)
}

export default CardOutpatient