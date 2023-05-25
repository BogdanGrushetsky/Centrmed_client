
import ErrorModal from '../Modals/ErrorModal/ErrorModal'
import './LayoutAdminPanel.css'
export const LayoutAdminPanel = ({ children }) => {
	return (
		<section className='LayoutAdminPanel'>
			<ErrorModal />
			{children}
		</section>
	)

}