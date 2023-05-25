import { LayoutCabinet } from '../../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { Forma } from '../../../DoctorComponents/Forma/Forma'
import { TitlePages } from '../../../СommonСomponents/TitlePages/TitlePages'




export const ProfileDoctor = () => {


	return (
		<div>
			<LayoutCabinet>
				<TitlePages>Ваш профіль</TitlePages>
				<Forma />
			</LayoutCabinet>
		</div>
	)
}