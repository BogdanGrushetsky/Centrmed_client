export class adminEdtitUserDTO {
	email;
	id;
	name
	userInfo = {
		dateOfBirth: undefined,
		phoneNumber: undefined,
		Residence: {
			country: undefined,
			region: undefined,
			city: undefined
		}
	}
	password
	constructor(model) {
		this.email = model.email;
		this.id = model._id;
		this.name = model.name;
		this.password = model.password;
		this.userInfo.dateOfBirth = model.dateOfBirth;
		this.userInfo.phoneNumber = model.phoneNumber;
		this.userInfo.Residence.country = model.country;
		this.userInfo.Residence.region = model.region;
		this.userInfo.Residence.city = model.city;
	}
};