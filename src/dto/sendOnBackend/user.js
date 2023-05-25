export class UserDto {
	email;
	name
	userInfo = {
		dateOfBirth: '',
		phoneNumber: '',
		Residence: {
			country: '',
			region: '',
			city: ''
		}
	}
	constructor(model) {
		this.email = model.email;
		this.name = model.name;
		this.userInfo.dateOfBirth = model.dateOfBirth;
		this.userInfo.phoneNumber = model.phoneNumber;
		this.userInfo.Residence.country = model.country;
		this.userInfo.Residence.region = model.region;
		this.userInfo.Residence.city = model.city;
	}
};