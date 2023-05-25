import { Context } from '..';
import $api from '../http/index'
import { useContext, useLayoutEffect, useState } from 'react'
export const useListUsers = (rout, Roles, paramsProps) => {
	const { store } = useContext(Context);
	const [arrayUser, setArrayUser] = useState([])
	const [maxPage, setMaxPage] = useState(1)
	const [activePage, setPage] = useState(1)
	const choseRole = (role, request) => {
		setArrayUser(request.data[role + 's'])
	}
	const params = paramsProps ? paramsProps : ''

	useLayoutEffect(() => {
		const paramsSerchWord = params.split('serchWord=')[1]
		const routToGo = params ? `${rout}${params}` : rout
		if (!paramsSerchWord) {

			$api.get(routToGo).then((e) => {
				setMaxPage(e.data.pageCount)
				choseRole(Roles, e)
				console.log(e)
			}).catch((e) => {
				console.log(e)
				store.setTextError(e)
			})

		} else {
			const timeout = setTimeout(() => {
				$api.get(routToGo).then((e) => {
					setMaxPage(e.data.pageCount)
					choseRole(Roles, e)
					console.log(e)
				}).catch((e) => {
					store.setTextError(e)
				})
			}, 700)
			return () => {
				clearTimeout(timeout);
			};

		}
	}, [Roles, rout, params])

	const goToPrevPage = (activePage) => {
		if (activePage === 1) {
			return
		}
		const pageToGo = activePage - 1

		$api.get(rout + `page=${pageToGo}${params}`).then(e => {
			setPage(pageToGo)
			choseRole(Roles, e)
		}).catch((e) => {
			store.setTextError(e)
		})

	}
	const goToNextPage = (activePage) => {
		if (activePage === maxPage) {
			return
		}
		const pageToGo = activePage + 1

		$api.get(`${rout}page=${pageToGo}${params}`).then(e => {
			setPage(pageToGo)
			choseRole(Roles, e)
		}).catch((e) => {
			store.setTextError(e)
		})

	}
	const goToPage = (pagePick) => {
		if (pagePick === activePage) {
			return
		}


		$api.get(rout + `page=${pagePick}${params}`).then(e => {
			setPage(pagePick)
			choseRole(Roles, e)
		}).catch((e) => {
			store.setTextError(e)
		})

	}
	return {
		goToPage,
		goToNextPage,
		goToPrevPage,
		maxPage,
		activePage,
		arrayUser
	}

}