import './Pagination.css'
import { ReactComponent as RowBotton } from '../../../../icons/rowbotton.svg';
export const Pagination = ({ goToPrevPage, maxPage, activePage, goToNextPage, goToPage }) => {


	if (!activePage) {
		activePage = 1
	}
	const arrs = Array(maxPage).fill(0)
	activePage = activePage - 1


	return (
		<>
			{maxPage !== 0 && <div className='Pagination__Wrapper'>
				<div className='Pagination' >
					<div className='Pagination__wrapperButton' onClick={() => goToPrevPage(activePage + 1)}><RowBotton className={'Pagination__arow '} /></div>
					{arrs.map((el, i) => {
						if (i >= activePage && i < activePage + 4) {
							return (
								<div
									onClick={() => goToPage(i + 1)}
									key={i}
									className={`Pagination__wrapperButton ${activePage === i ? 'active' : ''}`}>
									{i + 1}
								</div>

							)
						}
						if (i === activePage + 5) {
							return (<div
								key={i}
								className={`Pagination__wrapperButton`}>
								{'...'}
							</div>
							)
						}
						return null
					})}
					<div onClick={() => goToNextPage(activePage + 1)} className='Pagination__wrapperButton'><RowBotton className={'Pagination__arow right'} /> </div>
				</div>
			</div>}
		</>
	)
}