import React from 'react'
import { useParams } from 'react-router-dom';
import { FinanceUser } from './FinanceUser/FinanceUser';
import { ProfileUser } from './ProfileUser/ProfileUser';
import { OutpatientСard } from './OutpatientСard/OutpatientСard';
import { MessagesCorrespondence } from './MessagesCorrespondence/MessagesCorrespondence';
import BookingUser from './BookingUser/BookingUser';


function Wrapper() {
	const { tab } = useParams();

	const tabsUser = [
		{
			textUkr: "Заброньований час",
			textEng: "booked_time"
		},
		{
			textUkr: "Повідомлення та листування",
			textEng: "messages"
		},
		{
			textUkr: "Профіль",
			textEng: "profile"
		},
		{
			textUkr: "Амбулаторна карта",
			textEng: "outpatient_card"
		},
		{
			textUkr: "Мої фінанси",
			textEng: "finances"
		}
	]

	switch (tab) {
		case 'booked_time':
			return (
				<BookingUser tabs={tabsUser} />
			)
		case 'messages':
			return (
				<MessagesCorrespondence tabs={tabsUser} />
			)
		case 'profile':
			return (<ProfileUser tabs={tabsUser} />
			)
		case 'outpatient_card':
			return (<OutpatientСard tabs={tabsUser} />
			)
		case 'finances':
			return (<FinanceUser tabs={tabsUser} />
			)
		default:
			return <></>
	}

}

export default Wrapper