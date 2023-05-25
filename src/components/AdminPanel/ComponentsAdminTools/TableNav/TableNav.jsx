
import { ReactComponent as QuestionMark } from '../../../../icons/questionMark.svg';
import { ReactComponent as DownArrow } from '../../../../icons/downArrow.svg';
import './TableNav.css'
import { InputSearch } from '../InputSearch/InputSearch';
export const TableNav = ({ statusNav, stateInput, setInput, role }) => {

	return (
		<nav className='TablesUser__NavTools' >
			<div className='TablesUser__name'>
				<span >Ім’я</span>
				<InputSearch stateInput={stateInput} setInput={setInput} />
			</div>
			<span className='TablesUser__status'>
				{
					(role !== 'pasient') ? <>Статус<DownArrow /></> : null
				}
			</span>
			<span className='TablesUser__time'>
				{
					!statusNav ? 'Дата/Час' : ''
				}
			</span>
			<span className='TablesUser__role'>Роль <QuestionMark /> </span>
			<span className='TablesUser__email'>Email address</span>
			<span className='TablesUser__timePiker'>Керувати часом</span>
			<span className='TablesUser__blockButton'></span>
		</nav>
	)
}