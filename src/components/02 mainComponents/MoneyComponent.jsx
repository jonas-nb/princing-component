import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './MainContext'

const MoneyComponent = () => {
    let {
        rangeValue,
        moneyValue,
        setMoneyValue,
        billing,
        discont,
        setDiscont,
    } = useContext(MainContext)
    console.log(billing)
    useEffect(() => {
        if (rangeValue === '1') {
            setMoneyValue(5.0)
            setDiscont(5.0 - (5.0 * 25) / 100)
        } else if (rangeValue === '2') {
            setMoneyValue(9.0)
            setDiscont(9.0 - (9.0 * 25) / 100)
        } else if (rangeValue === '3') {
            setMoneyValue(16.0)
            setDiscont(16.0 - (16.0 * 25) / 100)
        } else if (rangeValue === '4') {
            setMoneyValue(28.0)
            setDiscont(28.0 - (28.0 * 25) / 100)
        }
    }, [rangeValue])

    return (
        <div>
            <div>
                ${billing === true ? discont : moneyValue} <span>/ month</span>
            </div>
        </div>
    )
}

export default MoneyComponent
