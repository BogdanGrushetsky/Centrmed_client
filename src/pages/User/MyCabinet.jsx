import React, { Suspense } from 'react'
import { FindDoctor } from '../../components/ComponentsProfile/WorkArea/User/FindDoctor/FindDoctor'
import { Layout } from '../../components/Layout/Layout'
import { Loader } from '../../components/Loader/Loader'
function MyCabinet() {
	return (
		<Suspense fallback={<Loader />}>
			<Layout>
				<FindDoctor />
			</Layout>
		</Suspense>

	)
}

export default MyCabinet