import { useContext } from 'react';
import { Context } from '../..';


export const useShowError = () => {
	const { store } = useContext(Context);
	const throwError = (error) => store.setTextError(error)
	return { throwError }
}