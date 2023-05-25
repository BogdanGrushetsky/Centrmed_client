import img from '../../../images/doctor.png'


const review = {
	name: 'Владислав',
	date: '24 грудня 2022 о 13:24',
	country: 'Київ, Україна',
	massage: 'Чудовий спеціаліст! Продвинутий, уважний. Добре, що такі чудові спеціалісти консультують онлайн! Більше вам пацієнтів, лікар Козак! Рекомендую! '
}

export const arrayReview = [review, review, review]
export const dataDoctor = {
	name: 'Людмила Петрівна Козак',
	email: 'olivia@untitledui.com',
	tel: '+380 50 027 88 46',
	date: '28.12.1987',
	numCard: '1234 1234 1234 1234',
	nameCard: 'Ludmyla Kozak',

	speciality: 'Хірург',
	priceConsultation: 120,
	timeWork: 43,
	blanceMoney: 5160,
	img,
	status: true,
	role: 'doctor',
	time: '5.04.2023 10:51',
	arrayReview
}
export const dataDoctorFalse = {
	img,
	name: 'Катя Петровна',
	role: 'doctor',
	status: false,
	email: 'olivia@untitledui.com',

	tel: '+380 50 027 88 46',
	date: '28.12.1987',
	numCard: '1234 1234 1234 1234',
	nameCard: 'Ludmyla Kozak',

	speciality: 'Хірург',
	priceConsultation: 120,
	timeWork: 43,
	blanceMoney: 5160,
	arrayReview
}
export const arrayDoctor = [dataDoctor, dataDoctor, dataDoctor, dataDoctorFalse, dataDoctorFalse]



export const dataUser = {
	name: 'Людмила Петрівна Козак',
	email: 'olivia@untitledui.com',
	tel: '+380 50 027 88 46',
	date: '28.12.1987',
	numCard: '1234 1234 1234 1234',
	nameCard: 'Ludmyla Kozak',
	img,
	role: 'doctor',
	time: '5.04.2023 10:51'
}
export const arrayUser = [dataUser, dataUser, dataUser, dataUser, dataUser, dataUser]


export const ArraySpeciality = ['Хірург', "Уролог", "Анколог", "Андролог", "Генетик", "Гепатолог", 'Хірург', "Уролог", "Анколог", "Андролог", "Генетик", "Гепатолог", 'Хірург', "Уролог", "Анколог", "Андролог", "Генетик", "Гепатолог",] 