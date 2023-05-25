import { Button } from '../../../Button/Button'
import './InputFile.css'
import { ReactComponent as Clip } from '../../../../icons/clip.svg';
import { ReactComponent as ButtonSvg } from '../../../../icons/buttonDell.svg';
import { useState } from 'react';
import $api from '../../../../http';
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError';
export const InputFile = ({ rout, confirmation }) => {
	const [fileStore, setFileStore] = useState([])
	const { throwError } = useShowError()

	const sendFile = async () => {

		const formData = new FormData()
		fileStore.map((el, i) => formData.append('files', el))

		console.log(formData.getAll('files'))
		$api.post(rout, formData, {}).then(function (response) {
			// eslint-disable-next-line no-restricted-globals
			location.reload()
		}).catch(e => throwError(e))

	}
	const onImageChange = async (event) => {
		if (event.target.files && event.target.files[0]) {
			for (let key in event.target.files) {
				if (key <= 10) {
					setFileStore(state => [...state, event.target.files[key]]);
				}

			}
		}
	}
	const deleteFile = (element) => {
		setFileStore(fileStore.filter((item) => item.name !== element))
	}


	return (
		<div className='Forma__wrapperFile'>
			<div className='InputFile'>
				<input accept='.pdf,image/*,.jpg,.web,.' multiple onChange={onImageChange} style={{ display: 'none' }} id='input' type="file" />
				<label className='InputFile__input' htmlFor='input'>
					<span className='InputFile__text'> <Clip className='InputFile__svg' /> Будь ласка завантажде документи.</span>
				</label>
				<div>
					{fileStore?.map((element, i) => {
						const { name } = element
						return (<div className='InputFile__file' key={i}>
							{`${name}`}
							<ButtonSvg onClick={() => deleteFile(name)} className='InputFile__buttonDel' />
						</div>)
					})}
				</div>
			</div>
			<div className='InputFile__buttonWrapper'>
				<Button onClick={sendFile}>Відправити {!confirmation && 'на підтвердження'} </Button>
			</div>
		</div>
	)
}