import { useLayoutEffect, useState } from 'react'
import { Button } from '../../../Button/Button'
import { InputNumberWithText } from '../../../InputNumberWithText/InputNumberWithText'
import './PriceLimit.css'
import $api from '../../../../http'
import { routePriceLimit } from '../../../../http/routeBack'
import { useShowError } from '../../../../hooks/useRequestStatus/useShowError'
export function PriceLimit() {
	const { throwError } = useShowError()

	const [fromLimitPrice, setFromLimitPrice] = useState('')
	const [toLimitPrice, setToLimitPrice] = useState('')
	useLayoutEffect(() => {
		$api.get(routePriceLimit.getPriceLimit).then(e => {
			setFromLimitPrice(e.data.from)
			setToLimitPrice(e.data.to)
		})
	}, [])
	const submit = (event) => {
		event.preventDefault()
		$api.patch(`${routePriceLimit.pathPriceLimit}/?from=${fromLimitPrice}&to=${toLimitPrice}`).catch(e => throwError(e))
	}

	return (
		<form onSubmit={submit} className='PriceLimit'>
			<span className='PriceLimit__title'>Встановити межі цін</span>
			<div className='PriceLimit__wrapperInput'>
				<InputNumberWithText text={'грн'} inputTitle={'Від'} placeholder={fromLimitPrice || '70'} onChange={e => setFromLimitPrice(e.target.value)} value={fromLimitPrice} />
				<InputNumberWithText text={'грн'} onChange={e => setToLimitPrice(e.target.value)} value={toLimitPrice} inputTitle={'До'} placeholder={toLimitPrice || '1000'} />
			</div>
			<Button>Застосувати</Button>
		</form>
	)
}
