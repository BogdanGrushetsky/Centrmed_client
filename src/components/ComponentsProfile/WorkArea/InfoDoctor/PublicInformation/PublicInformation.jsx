import { TitleActiveBlock } from '../../../UserComponents/TitleActiveBlock/TitleActiveBlock'
import { Suspense, lazy } from 'react'
import { Loader } from '../../../../Loader/Loader'

const ReviewBlock = lazy(() => import('../../../../ComponentsProfileDoctor/ReviewBlock/ReviewBlock'))
const AllInfoDoctor = lazy(() => import('../../../../ComponentsProfileDoctor/AllInfoDoctor/AllInfoDoctor'))
const InfoBlock = lazy(() => import('../../../../ComponentsProfileDoctor/InfoBlock/InfoBlock'))
export const PublicInformation = () => {


	return (
		<>
			<Suspense fallback={<Loader />}>
				<InfoBlock />
			</Suspense>
			<Suspense fallback={<Loader />}>
				<AllInfoDoctor />
			</Suspense>

			<TitleActiveBlock>Відгуки</TitleActiveBlock>
			<Suspense fallback={<Loader />}>
				<ReviewBlock />
			</Suspense>

		</>
	)
}