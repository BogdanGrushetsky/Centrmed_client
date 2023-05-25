
import './SearchMassage.css'
import { ReactComponent as Search } from '../../../../../icons/search.svg';

export const SearchMassage = ({ ref, placeholder, value, searching, ...props }) => {

	return (
		<div className="SearchMassage">
			<Search className="SearchMassage__svg" />
			<input ref={ref} value={value} onChange={(e) => searching(e.target.value)} className="SearchMassage__input" placeholder={placeholder} {...props} />
		</div>
	)
}