import { useContext, useEffect, useRef, useState } from 'react'
import { DropDoun } from '../../UserComponents/ComponentSearch/DropDoun/DropDoun'
import { Context } from '../../../..';
import './PickLocation.css'
import { arrrVol, cityVin, arrayObl, arrayDne, arrayGit, arrayZak, arrayZapo, arrayIvan, arrayKie, arrayKirov, arrayLviv, arrayMik, arrayOdes, arrayPol, arrayRivne, arraySum, arrayHar, arrayHerson, arrayHmel, arraCher, arrayChernig } from './city'
import Store from '../../../../store/store'

// arrayObl = ['Вінницька', 'Волинська', 'Дніпропетровська', 'Житомирська', 'Закарпатська', 'Запорізька', 'Івано-Франківська', 'Київська', 'Кіровоградська', 'Львівська', 'Миколаївська', 'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Харківська', 'Херсонська', 'Хмельницька', 'Черкаська', 'Чернівецька',]

export const PickLocation = ({ infoUser, data, setRerender }) => {
	const { store } = useContext(Context);
	const [country, setCountry] = useState('')
	const [region, setRegion] = useState('')
	const [city, setCity] = useState('')
	const [arrayCity, setArrayCity] = useState([])
	useEffect(() => {
		infoUser.current.country = country
		infoUser.current.region = region
		infoUser.current.city = city
		store.setRerender()
	}, [country, region, city])
	useEffect(() => {
		setRegionArra(region)
	}, [region])
	const setRegionArra = (region) => {
		switch (region) {
			case 'Вінницька':
				setArrayCity(cityVin)
				break;
			case 'Волинська':
				setArrayCity(arrrVol)
				break;
			case 'Дніпропетровська':
				setArrayCity(arrayDne)
				break;
			case 'Житомирська':
				setArrayCity(arrayGit)
				break;
			case 'Закарпатська':
				setArrayCity(arrayZak)
				break;
			case 'Запорізька':
				setArrayCity(arrayZapo)
				break;
			case 'Івано-Франківська':
				setArrayCity(arrayIvan)
				break;
			case 'Київська':
				setArrayCity(arrayKie)
				break;
			case 'Кіровоградська':
				setArrayCity(arrayKirov)
				break;
			case 'Львівська':
				setArrayCity(arrayLviv)
				break;
			case 'Миколаївська':
				setArrayCity(arrayMik)
				break;
			case 'Одеська':
				setArrayCity(arrayOdes)
				break;
			case 'Полтавська':
				setArrayCity(arrayPol)
				break;
			case 'Рівненська':
				setArrayCity(arrayRivne)
				break;
			case 'Сумська':
				setArrayCity(arraySum)
				break;
			case 'Харківська':
				setArrayCity(arrayHar)
				break;
			case 'Херсонская':
				setArrayCity(arrayHerson)
				break;
			case 'Xмельницька':
				setArrayCity(arrayHmel)
				break;
			case 'Черкаської':
				setArrayCity(arraCher)
				break;
			case 'Чернівецька':
				setArrayCity(arrayChernig)
				break;
			default:
				break;
		}
	}
	return (
		data &&
		<div className='PickLocation'>
			<DropDoun infoUser={setCountry} lists={['Україна']}>
				{data?.Residence?.country || 'Країна'}
			</DropDoun>
			<DropDoun infoUser={setRegion} lists={arrayObl}>
				{data?.Residence?.region || 'Область'}
			</DropDoun>
			{region && <DropDoun lists={arrayCity} infoUser={setCity}>
				{data?.Residence?.city || 'Місто'}
			</DropDoun>}
		</div>
	)
}

