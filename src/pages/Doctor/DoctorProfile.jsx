
import React from 'react'
import { Forma } from '../../components/ComponentsProfile//DoctorComponents/Forma/Forma'
import { TitlePages } from '../../components/ComponentsProfile/СommonСomponents/TitlePages/TitlePages'

function DoctorProfile() {
	return (
		<>
			<TitlePages>Ваш профіль</TitlePages>
			<Forma />
		</>
	)
}

export default DoctorProfile