import React from 'react'
import Header from '../components/Layout/Header/Header'
import { ModalProvider } from "react-modal-hook";
import Footer from '../components/Layout/Footer/Footer'
import { Outlet } from 'react-router-dom';

function PageLayout() {
	return (
		<ModalProvider>
			<Header />
			<Outlet />
			<Footer />
		</ModalProvider>
	)
}

export default PageLayout