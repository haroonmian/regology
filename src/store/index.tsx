import React, { createContext, useReducer } from 'react'
import initialState from './states'
import reducer from './reducers'
import type { InitialStateType, ActionType } from '../types/Store'

export const Context = createContext<[InitialStateType, React.Dispatch<ActionType>]>([initialState, () => null])

const Store: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    )
}

export default Store
