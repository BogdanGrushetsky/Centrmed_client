import { BlockSeach } from '../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import { SearchMassage } from '../../../UserComponents/ComponentSearch/SearchMassage/SearchMassage'
import { DropDoun } from '../../../UserComponents/ComponentSearch/DropDoun/DropDoun'
import { Button } from '../../../../Button/Button'
import { ReactComponent as DownloadIcon } from '../../../../../icons/downloadIcon.svg';
import { ReactComponent as BoxDocumentIcon } from '../../../../../icons/boxDocumentIcon.svg';
import { ReactComponent as Search } from '../../../../../icons/searchWhite.svg';
import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import { CardOutpatient } from '../../../UserComponents/CardOutpatient/CardOutpatient'
import './OutpatientСard.css'
import PatientDataBlock from './PatienDataBlock/PatientDataBlock';
export const OutpatientСard = (props) => {
	const lists = ['Заключення', 'Аналізи', 'Обстеження', "Виписка", 'Справка'];

	return (
		<>
			<div className='OutpatientСard'>
				<div className='OutpatientСard__wrapperSearchBlock'>

					<BlockSeach style={{ height: '250px', marginBottom: '20px' }}>
						<SearchMassage placeholder={"Пошук файлів в амбулаторній карті"} />
						<DropDoun lists={lists}>
							Пошук за типом файлу
						</DropDoun>
						<div className='OutpatientСard__buttonCenter'>
							<div className='OutpatientСard__buttonWrapper'>
								<Button> <Search className='OutpatientСard__svg' /> Пошук</Button>
							</div>
						</div>
					</BlockSeach>
					<PatientDataBlock />

					{/* <BlockSeach>
						<InputAllUser type={'text'} placeholder={'79 (Кг)/183 (См)'} inputTitle={'Вага (Кг)/Зріст (См)'} />
						<TextAreaAllUser placeholder={'Постійно болить голова, трохи нудить...'} title={'Скарги на стан здоров’я'} />
						<TextAreaAllUser placeholder={'Нема'} title={'Алергії'} />
						<Button>Оновити дані</Button>
					</BlockSeach> */}
				</div>
				<TitleActiveBlock>Моя амбулаторна карта</TitleActiveBlock>
				<div className='OutpatientСard__blockButtonWrapper'>
					<div className='OutpatientСard__block'>
						<div className='OutpatientСard__button'><Button>Створити папку <BoxDocumentIcon className='OutpatientСard__svg' /> </Button></div>
						<div className='OutpatientСard__button'><Button>Завантажити файли <DownloadIcon className='OutpatientСard__svg' /> </Button></div>
					</div>
				</div>
				<CardOutpatient />
			</div>
		</>
	)
}