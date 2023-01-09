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
        <div className="m-auto w-[11.1rem] h-11 flex justify-center items-center lg:mt-8">
            <div className="m-auto text-center w-full text-[2rem] font-[600] text-[#1b2959] flex items-center justify-between">
                {billing === true ? (
                    <div>
                        {`$${discont < 10 ? '0' : ''}${discont}${
                            discont > 10 ? '.00' : ''
                        }
                    `}
                    </div>
                ) : (
                    <div>{`$${
                        moneyValue < 10 ? '0' : ''
                    }${moneyValue}.00`}</div>
                )}
                <span className="text-[0.75rem] text-[#868fa6]">/ month</span>
            </div>
        </div>
    )
}

export default MoneyComponent
