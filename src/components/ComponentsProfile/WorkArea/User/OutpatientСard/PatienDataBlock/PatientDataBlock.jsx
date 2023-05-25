import { Button } from '../../../../../Button/Button'
import { BlockSeach } from '../../../../UserComponents/ComponentSearch/BlockSeach/BlockSeach'
import { InputAllUser } from '../../../../СommonСomponents/InputAllUser/InputAllUser'
import { TextAreaAllUser } from '../../../../СommonСomponents/TextAreaAllUser/TextAreaAllUser'



function PatientDataBlock() {


	return (
		<BlockSeach>
			<InputAllUser type={'text'} placeholder={'79 (Кг)/183 (См)'} inputTitle={'Вага (Кг)/Зріст (См)'} />
			<TextAreaAllUser placeholder={'Постійно болить голова, трохи нудить...'} title={'Скарги на стан здоров’я'} />
			<TextAreaAllUser placeholder={'Нема'} title={'Алергії'} />
			<Button>Оновити дані</Button>
		</BlockSeach>
	)
}

export default PatientDataBlock