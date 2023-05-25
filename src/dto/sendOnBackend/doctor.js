export class DoctorDto {
	email;
	name
	specialist
	consultationPrice
	doctorInfo = {
		acceptsInClinics: undefined,
		workExperience: undefined,
		study: undefined,
		dateOfBirth: undefined,
		phoneNumber: undefined,
		bio: undefined,
		Residence: {
			country: undefined,
			region: undefined,
			city: undefined
		}
	}

	constructor(model) {
		this.email = model.email;
		this.name = model.name;
		this.doctorInfo.dateOfBirth = model.dateOfBirth;
		this.doctorInfo.phoneNumber = model.phoneNumber;
		this.doctorInfo.bio = model.bio;
		this.doctorInfo.Residence.country = model.country;
		this.doctorInfo.Residence.region = model.region;
		this.doctorInfo.Residence.city = model.city;
		this.specialist = model.specialist;
		this.consultationPrice = model.consultationPrice;
		this.doctorInfo.acceptsInClinics = model.acceptsInClinics;
		this.doctorInfo.workExperience = model.workExperience;
		this.doctorInfo.study = model.study;
	}
};