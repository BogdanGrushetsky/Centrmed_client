
import { useEffect, useState, } from 'react';
export const HookSearchBlock = (arraySpecilist, innerRef, selectDoctorSpecialist) => {
	const [array, setArray] = useState(arraySpecilist);
	const [arrayFilter, setArrayFiltre] = useState(arraySpecilist);
	const [search, setSearch] = useState('')
	const [selectArray, setSelectArray] = useState([])
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (selectDoctorSpecialist) {
			setSelectArray(selectDoctorSpecialist)
		}
		setArray(arraySpecilist)
		setArrayFiltre(arraySpecilist)

	}, [arraySpecilist, selectDoctorSpecialist])
	const toogle = () => {
		setOpen(state => !state)
	};
	const searching = (e) => {
		setOpen(true)
		setSearch(e)
		setArray(state => arrayFilter.filter(el => el.specialist.toLocaleLowerCase().includes(e)))
	}
	const addToSelectArray = (item) => {
		setSelectArray(state => [...state, item])
		setArray(state => state.filter(el => el._id !== item._id))
	}
	const deleteOnSelectArray = (item) => {
		setSelectArray(state => state.filter(el => el._id !== item._id))
		setArray(state => [...state, item])
	}
	innerRef.current.specialist = selectArray
	return {
		setOpen,
		deleteOnSelectArray,
		addToSelectArray,
		searching,
		toogle,
		array,
		selectArray,
		search,
		open
	}
}