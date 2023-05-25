
import React, { useLayoutEffect, useState } from 'react'
import './ReviewBlock.css'
import $api from '../../../http'
import { routeReview } from '../../../http/routeBack'
import { useParams } from 'react-router-dom'
import { Reviews } from '../Reviews/Reviews'

export default React.memo(function ReviewBlock() {
	const [data, setData] = useState([])
	const { id } = useParams()
	useLayoutEffect(() => {
		$api.get(`${routeReview.getReview}${id}`).then(e => setData(e.data.reviews))

	}, [id])

	console.log(data)
	return (
		<div className='ReviewBlock'>
			{data && data.length === 0 ? <span className='ReviewBlock__noRevie'>Немає відгуків</span>
				:
				data?.map(el =>
					<Reviews key={el?.id}
						country={el?.country}
						description={el?.description}
						feedback={el?.feedback}
						name={el?.name}
						rate={el?.rate}
						region={el?.region} />
				)}
		</div>
	)
})