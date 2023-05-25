import { useContext, useLayoutEffect, useState } from 'react'
import { Context } from "../index";
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
	const { store } = useContext(Context);
	const [theme, setTheme] = useState(
		localStorage.getItem('app-theme') || defaultTheme
	)
	const [value, setValue] = useState(theme === 'light' ? false : true);

	const changeThema = () => {
		console.log(store.user)
		if (value) {

			setTheme('light')
			setValue(false)
		} else {
			setValue(true)
			setTheme('dark')
		}
	}
	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('app-theme', theme)

	}, [theme])

	return { theme, setTheme, value, changeThema }
}