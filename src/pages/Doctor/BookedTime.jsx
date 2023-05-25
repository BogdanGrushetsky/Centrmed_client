
import React from 'react'
import { TitlePages } from '../../components/ComponentsProfile/СommonСomponents/TitlePages/TitlePages'
import { WorkTimeDoctor } from '../../components/ComponentsProfile/WorkArea/Doctor/WorkTimeDoctor/WorkTimeDoctor'

function BookedTime() {
	return (
		<>
			<TitlePages>Відпрацьований час</TitlePages>
			<WorkTimeDoctor />
		</>
	)
}

export default BookedTime