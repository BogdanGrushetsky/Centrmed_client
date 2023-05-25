import { ReactComponent as Error } from '../../../icons/error.svg';
import { ReactComponent as CloseButton } from '../../../icons/closeButton.svg';
import './ErrorModal.css'
import { Context } from '../../..';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ReactModal from 'react-modal';

function ErrorModal() {
	const { store } = useContext(Context);


	return (
		<ReactModal
			isOpen={store.errorModalState}
			overlayClassName="overlay"
			className="content"
			ariaHideApp={false}
			style={{ overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 6, }, }}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<section className='ErrorModal__wrapper'>
					<div className='ErrorModal__content'>
						<Error />
						<div className='ErrorModal__wrapperText'>
							<h4 className='ErrorModal__title'>
								Трапилась помилка
							</h4>
							<span >
								{store.errorText || 'Трапилася непередбачена помилка. Перезавантажте сторінку або поверніться до нас через пару хвилин'}
							</span>
						</div>
						<CloseButton onClick={() => store.hideError()} className='ErrorModal__close' />
					</div>
				</section>
			</div>
		</ReactModal>
	)
}
export default observer(ErrorModal)