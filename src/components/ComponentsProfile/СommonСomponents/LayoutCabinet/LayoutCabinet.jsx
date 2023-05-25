
import { useParams, useNavigate } from 'react-router-dom';
import './LayoutCabinet.css'
import { TabNavigation } from '../TabNavigation/TabNavigation'

export const LayoutCabinet = ({ children, tabs, role }) => {


	return (
		<div className='Layouts'>
			<TabNavigation tabs={tabs} role={role} />
			{/* <div className="layoutNavigation">
				{tabs.map(el =>
					<div
						key={el.textEng}
						className={tab === el.textEng.toLowerCase() && 'active'}
						onClick={() => { navigation(`/${role}/${el.textEng}`) }}
					>{el.textUkr}</div>)}
			</div> */}
			<section className='LayoutUsers'>
				{children}

			</section>
		</div>
	)
}