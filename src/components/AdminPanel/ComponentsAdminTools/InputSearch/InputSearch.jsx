
import { ReactComponent as Serch } from '../../../../icons/search.svg';

import './InputSearch.css'

export const InputSearch = ({ stateInput, setInput, ...props }) => {
	return (
		<div className='InputSearch__wrapper'>
			<input value={stateInput} onChange={(e) => setInput(e.target.value)} className='InputSearch' {...props} placeholder='Пошук за ім’ям' />
			<Serch className={'InputSearch__svg'} />
		</div>
	)
}
