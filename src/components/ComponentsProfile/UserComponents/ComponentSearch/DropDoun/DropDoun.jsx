import { useState } from 'react'
import { ReactComponent as RowBotton } from '../../../../../icons/rowbotton.svg';
import './DropDoun.css'
export const DropDoun = ({ children, svg, lists, infoUser, ...props }) => {
	const [open, setOpen] = useState(false);
	const toogle = () => setOpen(!open);
	const [selectData, setSelectData] = useState(children)

	const clickOnSelectData = (e) => {
		setSelectData(e)

		infoUser(e)

	}
	return (
		<div className='DropDoun'>
			<div {...props}
				tabIndex={0}
				role='button'
				onClick={() => toogle()}>
				<div className='DropDoun__searchText'>
					<div className='DropDoun__searchTextBlock'>
						{svg && <span className='DropDoun__searchTextLeftSvg'>{svg}</span>}
						{selectData}
					</div>
					<RowBotton />
				</div>
				{open && <ul className={'DropDoun__list'}>
					{/*  нужно массив передавать  с выпадающим списком */}
					{lists?.map((item, i) => (
						<li className={'DropDoun__itemList'} key={i}>
							<button onClick={() => clickOnSelectData(item)}
								className={"DropDoun__buttonList"}
								type='button'><span>{item}</span></button>
						</li>
					))}
				</ul>}
			</div>
		</div>
	)
}