
import avatar from '../../../../images/doctor.png'
import { useEffect, useState } from 'react'
import $api from '../../../../http/index'
export const HookAvatarLoader = ({ id, path }) => {
	const [image, setImage] = useState(avatar)
	const [errorImage, setErrorImage] = useState(false)

	useEffect(() => {
		if (id) {
			$api.get(`/avatar/${id}`).then(response => {
				setImage(response.data)
			});
		}
	}, [id])
	const onImageChange = (event) => {
		if (event.target.files[0].size < 5242880 && (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png')) {

			setErrorImage(false)
			setImage(URL.createObjectURL(event.target.files[0]));
			const formData = new FormData()
			formData.append('files', event.target.files[0])
			$api.post(path, formData, {}).then(e => console.log(e)).catch(e => console.log(e))
		} else {
			setErrorImage(true)

		}
	}


	return {
		onImageChange,
		image,
		errorImage
	}
}