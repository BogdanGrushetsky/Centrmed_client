

import React, { useLayoutEffect, useState } from 'react'
import { ReactComponent as RowBotton } from '../../icons/rowbotton.svg';
import './DropDounSerch.css'

import $api from '../../http';


export default React.memo(function DropDounSerch({ children, svg, rout, species, setSelectData, selectData }) {

	const [open, setOpen] = useState(false);
	const [arraySpecialist, setArraySpecialist] = useState([])
	const [arrayFilter, setArrayFilter] = useState([]);
	const [inputValue, setInputValue] = useState('')
	const toogle = () => setOpen(!open);
	const clickOnSelectData = (e) => {
		setSelectData(e)
	}
	const changeInput = (e) => {
		const value = e.target.value
		setInputValue(value)
		setArrayFilter(state => arraySpecialist.filter(el => el.specialist.toLocaleLowerCase().includes(value)))
	}
	useLayoutEffect(() => {
		$api.get(rout).then(e => {
			setArrayFilter(e.data.specialists)
			setArraySpecialist(e.data.specialists)
		})
	}, [rout])

	return (
		<div className='DropDoun'>
			<div onMouseLeave={() => setOpen(false)} tabIndex={0} role='button'>
				<div className='DropDoun__searchText'>
					{!open ?
						<>
							<div onClick={() => toogle()} className='DropDoun__searchTextBlock'>
								{svg && <span className='DropDoun__searchTextLeftSvg'>{svg}</span>}
								{selectData[species] || children}
							</div>
							<RowBotton />
						</>
						:
						<input value={inputValue} onChange={changeInput} placeholder='Пошук за фахом' className='DropDounSerch__input' />
					}
				</div>
				{open && <ul onClick={() => toogle()} className={'DropDoun__list'}>
					<button onClick={() => setSelectData({})} className={'DropDoun__buttonList filter'} >Прибрати фільтр </button>
					{arrayFilter?.map((item, i) => (
						<li className={'DropDoun__itemList'} key={item._id}>
							<button
								onClick={() => clickOnSelectData(item)}
								className={"DropDoun__buttonList"}
								type='button'>
								<span>
									{item[species] || item}
								</span>
							</button>
						</li>
					))}
				</ul>}
			</div>
		</div>
	)
}
)