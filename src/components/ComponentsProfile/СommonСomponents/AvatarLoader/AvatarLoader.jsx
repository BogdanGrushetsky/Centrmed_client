import { HookAvatarLoader } from './HookAvatarLoader'
import './AvatarLoader.css'
import { ReactComponent as ButtonAdd } from '../../../../icons/buttonDell.svg';

export const AvatarLoader = ({ path, id }) => {
	const { onImageChange,
		image,
		errorImage } = HookAvatarLoader({ path, id })
	return (
		<div className='AvatarLoader__avatarWrapper'>
			<input accept='image/*,.png,.jpg,.web,.' max-size="5242880" onChange={(e) => onImageChange(e)} id='formId' className="AvatarLoader__inputAvatar" type="file" />
			<label htmlFor="formId" className="AvatarLoader__labelAvatar">
				<img name='avatar' className='AvatarLoader__img' src={image} alt='avatar' />
				<ButtonAdd className='AvatarLoader__svgButton' />
			</label>
			{errorImage && <span>Файл має бути не більше 5 МБ та формату: jpeg, png</span>}
		</div>
	)
}