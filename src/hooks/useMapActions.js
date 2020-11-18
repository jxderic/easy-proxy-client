import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export const useMapActions = (actions) => {
	const dispatch = useDispatch()
	return useMemo(() => {
		const actionMap = {}
		for (let name of Object.keys(actions)) {
			if (typeof actions[name] !== 'function') continue
			actionMap[name] = (...args) => dispatch(actions[name](...args))
		}
		return actionMap
	}, [actions, dispatch])
}
