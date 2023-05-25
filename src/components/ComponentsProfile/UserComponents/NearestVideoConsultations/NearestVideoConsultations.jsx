import { BlockSeach } from '../ComponentSearch/BlockSeach/BlockSeach'
import { ReactComponent as Calendar } from '../../../../icons/calendar.svg';
import { CardNearestVideoConsultations } from '../CardNearestVideoConsultations/CardNearestVideoConsultations'
import { Button } from '../../../Button/Button'
import './NearestVideoConsultations.css'
export const NearestVideoConsultations = ({ array }) => {
	//  можно сразу тут получать массив с звонками
	return (
		<BlockSeach>
			<h2 className='NearestVideoConsultations__h2'>Найближчі відеоконсультації</h2>
			<div className='NearestVideoConsultations__blockSeachBlockText'>
				<div className='NearestVideoConsultations__blockSeachWrapperText'>
					{array ?
						<div className='NearestVideoConsultations__videoCallWrapper'>
							{array?.map(item => {
								const { img, name } = item.massage
								const { dateCreate, dateVideoCall } = item
								return (
									<CardNearestVideoConsultations dateCreate={dateCreate} dateVideoCall={dateVideoCall} img={img} name={name} />
								)
							})}
						</div> : <>
							<Calendar className='NearestVideoConsultations__blockSeachSvg' />
							<span>
								У Вас ще немає записів на відеоконсультацію
							</span>
						</>}


					<div className='NearestVideoConsultations__buttonWrapper'>
						<Button>Записатися на консультацію</Button>
					</div>
				</div>
			</div>
		</BlockSeach>
	)
}