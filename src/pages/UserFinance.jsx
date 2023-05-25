import React from 'react'
import Header from '../components/Header/Header'
import { ModalProvider } from "react-modal-hook";
import Footer from '../components/Footer/Footer'
import { FinanceUser } from '../components/ComponentsProfile/WorkArea/User/FinanceUser/FinanceUser';

function UserFinance() {
	return (
		<ModalProvider>
			<Header />
			<FinanceUser />
			<Footer />
		</ModalProvider>
	)
}

export default UserFinance