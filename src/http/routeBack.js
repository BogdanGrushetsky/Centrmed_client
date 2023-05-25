export const routeBack = {
	userAvatarDownload: '/files/avatar/user',
	doctorAvatarDownload: '/files/avatar/doctor',
	doctorRefreshPassword: '/doctorApi/refresh/password',
	doctorDownloadFile: '/files/documents/doctor',
}

export const routeAdmin = {
	getDoctors: '/adminApi/doctors/',
	getUsers: '/adminApi/users/',
	getFilterDoctors: '/adminApi/recentlyModifiedDoctors',
	getFilterUsers: '/adminApi/recentlyModifiedUsers',
	deleteDoctor: '/adminApi/doctor/delete/',
	deleteUser: '/adminApi/user/delete/',
	getUser: '/adminApi/user/',
	getDoctor: '/adminApi/doctor/',
	editProfileDoctor: '/adminApi/edit/doctor',
	editProfileUser: '/adminApi/edit/user',
	serchDoctor: '/adminApi/serch/doctor',
	serchUser: '/adminApi/serch/user',
	getFileDoctor: '/files/documents/doctor',
	deleteFile: '/files/delete/doctor/',
	pathFileDoctor: '/adminApi/files/documents/doctor/',
}
export const routeSpecialist = {
	deleteSpecialist: '/specialist/delete/',
	getAllSpecialist: '/specialist/',
	getSpecialist: '/adminApi/specialist/',
	updateSpecialist: '/specialist/update/',
	createSpecialist: '/specialist/create'
}
export const routePriceLimit = {
	getPriceLimit: '/adminApi/PriceLimit',
	pathPriceLimit: '/adminApi/PriceLimit',
}
export const routeReview = {
	getReview: '/review/',
	getDelete: '/review/'
}
export const routeUser = {
	myDoctor: '/user/myDoctor',
	serchDoctor: '/user/serchDoctor/',
	addToMyDoctor: '/user/myDoctor/',
	deleteDoctor: '/user/myDoctor/'
}
export const routeDoctor = {
	profileDoctor: '/doctorApi/',
	formaAllInfoDoctor: '/doctorApi/doctor'
}