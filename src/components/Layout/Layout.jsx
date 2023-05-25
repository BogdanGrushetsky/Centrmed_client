
import './Layout.css'
export const Layout = ({ children }) => {
	return (
		<div className='Layout'>
			<section className={`LayoutUser`}>
				{children}
			</section>
			<div className='Layout__svg'></div>
		</div>
	)

}