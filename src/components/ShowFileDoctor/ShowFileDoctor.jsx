import { ReactComponent as PDFLogo } from '../../icons/pdf.svg';
import { ReactComponent as ButtonDell } from '../../icons/buttonDell.svg';

import './ShowFileDoctor.css'
import { InputFile } from '../ComponentsProfile/DoctorComponents/InputFile/InputFile';
import { useState } from 'react';
import $api from '../../http';
import { routeAdmin } from '../../http/routeBack';
import { useParams } from 'react-router-dom';

export const ShowFileDoctor = ({ arrayFile, permission }) => {
	const { id } = useParams()
	const [blockDownloadFile, setBlockDownloadFile] = useState(false)
	const definFile = (path, i) => {

		const extension = exeptionFunc(path)

		if (extension !== 'pdf') {
			return (
				<a className='ShowFileDoctor__aWrapper' key={i} href={path}>
					<div className='ShowFileDoctor__wrapperImg'>
						<img className='ShowFileDoctor__img' src={path} alt="imgFile" />
					</div>
				</a>
			)
		} else {
			return (
				<a className='ShowFileDoctor__aWrapper' key={i} href={path}>
					<div className='ShowFileDoctor__wrapperImg'>
						<PDFLogo className='ShowFileDoctor__svg' />
					</div>
				</a>
			)
		}

	}

	const EditAdmin = (path, i) => {
		const extension = exeptionFunc(path)
		if (extension !== 'pdf') {
			return (

				<div key={i} className='ShowFileDoctor__wrapperImg'>
					<ButtonDell onClick={() => deleteFile(path)} className='ShowFileDoctor__dellButton' />
					<a className='ShowFileDoctor__aWrapper' key={i} href={path}>
						<img className='ShowFileDoctor__img' src={path} alt="imgFile" />
					</a>
				</div>

			)
		} else {
			return (
				<a className='ShowFileDoctor__aWrapper' key={i} href={path}>
					<div className='ShowFileDoctor__wrapperImg'>
						<ButtonDell className='ShowFileDoctor__dellButton' />
						<PDFLogo className='ShowFileDoctor__svg' />
					</div>
				</a>
			)
		}
	}
	const exeptionFunc = (path) => {
		const url = new URL(path);
		return url.pathname.split('.').pop();
	}
	const toogle = () => {
		setBlockDownloadFile(state => !state)
	}
	const deleteFile = (path) => {
		// eslint-disable-next-line no-restricted-globals
		$api.post(`${routeAdmin.deleteFile}${id}`, { path }).then((e) => location.reload())
	}

	return (
		<>
			<div className='ShowFileDoctor__Wrapper'>
				{!permission ?
					<>
						{arrayFile?.map((el, i) => (
							definFile(el, i)
						))}
					</>
					:
					<>
						{arrayFile?.map((el, i) => (
							EditAdmin(el, i)
						))}
						<div onClick={toogle} className='ShowFileDoctor__wrapperImg'>
							<ButtonDell className='ShowFileDoctor__addButton' />
						</div>
					</>
				}

			</div>
			{blockDownloadFile && <InputFile rout={`${routeAdmin.pathFileDoctor}${id}`} confirmation={true} />}
		</>
	)
}