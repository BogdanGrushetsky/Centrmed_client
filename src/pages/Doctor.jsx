import React from 'react'
import Header from '../components/Header/Header'
import { ModalProvider } from "react-modal-hook";
import Footer from '../components/Footer/Footer'
import Wrapper from '../components/ComponentsProfile/WorkArea/Doctor/Wrapper';

function Doctor() {
	return (
		<ModalProvider>
			<Header />
			<Wrapper />
			<Footer />
		</ModalProvider>
	)
}

export default Doctor