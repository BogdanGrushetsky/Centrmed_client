
import { useState } from 'react';
import { Loader } from '../../components/Loader/Loader';

export const useRequestStatus = () => {

	const [loadingState, setLoadingState] = useState(false)
	const ShowLoader = () => {
		return (loadingState && <Loader />)
	}
	const toogleLoading = () => {
		setLoadingState(state => !state)
	}

	return {
		toogleLoading,
		ShowLoader,
		loadingState,
	}

}