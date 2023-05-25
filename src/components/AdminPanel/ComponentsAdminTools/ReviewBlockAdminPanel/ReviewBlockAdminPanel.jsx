

import { useLayoutEffect, useState } from 'react'
import { Reviews } from '../../../ComponentsProfileDoctor/Reviews/Reviews'
import $api from '../../../../http'
import { routeReview } from '../../../../http/routeBack'
import { useRequestStatus } from '../../../../hooks/useRequestStatus/useRequestStatus'
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError'
export const ReviewBlockAdminPanel = ({ id }) => {
	const { throwError } = useShowError()
	const {
		toogleLoading,
		ShowLoader,
	} = useRequestStatus()
	const [reviews, setReviews] = useState()
	useLayoutEffect(() => {
		toogleLoading()
		$api.get(`${routeReview.getReview}${id}`).then(e => setReviews(e.data.reviews)).finally(() => toogleLoading()).catch(e => throwError(e))
	}, [id])
	return (
		ShowLoader() || <>
			{reviews?.length === 0 ?
				<div>Немає відгуків</div>
				:
				reviews?.map(el =>
					<Reviews
						key={el?.id}
						country={el?.country}
						description={el?.description}
						feedback={el?.feedback}
						id={el?.id}
						name={el?.name}
						rate={el?.rate}
						region={el?.region} />
				)}
		</>
	)
}