import { SearchMassage } from '../ComponentSearch/SearchMassage/SearchMassage'
import './SearchBlock.css'
import { HookSearchBlock } from './HookSearchBlock'
import React from 'react';
import { ReactComponent as CloseButton } from '../../../../icons/closeButton.svg';

export const SearchBlock = ({ arraySpecilist, innerRef, selectDoctorSpecialist }) => {
	const { deleteOnSelectArray,
		addToSelectArray,
		searching,
		toogle,
		array,
		selectArray,
		search,
		setOpen,
		open } = HookSearchBlock(arraySpecilist, innerRef, selectDoctorSpecialist)
	return (
		<div
			onMouseLeave={() => setOpen(false)}
			className='SearchBlock'>
			<div className='SearchBlock__wrapperSelectArray'>
				<span className='SearchBlock__span'>Перша обрана спеціальність буде основною</span>
				{selectArray?.map((el, i) => {
					return (
						<div className={`SearchBlock__itemSelectArray ${i === 0 ? 'main' : ''}`} key={i}>
							<div>{el?.specialist}</div>
							<CloseButton onClick={() => deleteOnSelectArray(el)} className='SearchBlock__svgSelectArray' />
						</div>
					)
				})}
			</div>
			<div onClick={toogle} className='SearchBlock__topSection'>
				<SearchMassage value={search} searching={searching} />
			</div>
			<div className='SearchBlock__centerSection'>
				<div className='SearchBlock__arrayWrapper'>
					{open && <ul className={'SearchBlock__ulDropDoun'}>
						{array?.map((item, i) => (
							<li className={'SearchBlock__liDropDoun'} key={i}>
								<button onClick={() => addToSelectArray(item)} className={'SearchBlock__buttonDropDoun'}>{item.specialist}</button>
							</li>
						))}
					</ul>}
				</div>
			</div>
		</div>
	)
}