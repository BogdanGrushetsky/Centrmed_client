import { useLayoutEffect, useState } from 'react'
import avatarSvg from '../../images/doctor.png'
import $api from '../../http'
import './GetAvatar.css'
export const GetAvatar = ({ id, ...props }) => {
	const [avatar, setAvatar] = useState()
	useLayoutEffect(() => {
		$api.get(`/avatar/${id}`).then(response => {
			setAvatar(response.data)
		});

	}, [id])

	return (<img className='GetAvatar' {...props} src={avatar || avatarSvg} alt={id + 'Img'} />)
}