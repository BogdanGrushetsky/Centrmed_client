import React from 'react'
import { useParams } from 'react-router-dom';

import { LayoutCabinet } from '../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { Forma } from '../../DoctorComponents/Forma/Forma'
import { TitlePages } from '../../СommonСomponents/TitlePages/TitlePages'

function Wrapper() {
	const { tab } = useParams();
  const tabsDoctor = [
		{
		  textUkr: "Заброньований час",
		  textEng: "booked_time"
		},
		{
		  textUkr: "Відпрацьований час",
		  textEng: "worked_time"
		},
		{
		  textUkr: "Профіль",
		  textEng: "profile"
		}
	  ]

	  switch(tab){
		case 'booked_time': 
			return (
				<LayoutCabinet role="doctor" tabs={tabsDoctor} >
				<TitlePages>Заброньований час</TitlePages>
				{/* <Forma /> */}
			</LayoutCabinet>
			)
		case 'worked_time': 
			return (
				<LayoutCabinet role="doctor" tabs={tabsDoctor} >
				<TitlePages>Відпрацьований час</TitlePages>
			</LayoutCabinet>
			)
		case 'profile': 
			return (
				<LayoutCabinet role="doctor" tabs={tabsDoctor} >
				<TitlePages>Ваш профіль</TitlePages>
				<Forma />
			</LayoutCabinet>
			)
		default: 
		return <></>
	  }
}

export default Wrapper