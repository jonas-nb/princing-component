import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
    let [rangeValue, setRangeValue] = useState({ min: 1, max: 4 })
    let [moneyValue, setMoneyValue] = useState(28.0)
    let [billing, setBilling] = useState(true)
    let [discont, setDiscont] = useState(28.0 - (28.0 * 25) / 100)
    return (
        <MainContext.Provider
            value={{
                rangeValue,
                setRangeValue,
                moneyValue,
                setMoneyValue,
                billing,
                setBilling,
                discont,
                setDiscont,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
