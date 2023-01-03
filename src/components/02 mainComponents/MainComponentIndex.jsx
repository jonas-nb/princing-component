import React from 'react'
import BillingComponent from './BillingComponent'
import Controller from './Controller'
import MoneyComponent from './MoneyComponent'
import './style.css'
const MainComponentIndex = () => {
    return (
        <div className="card m-auto mt-10 rounded-lg border w-11/12 drop-shadow-sm">
            <h2 className="mt-8 tracking-widest  uppercase font-[800] text-[#868fa6]">
                100k pageviews
            </h2>
            <Controller />
            <MoneyComponent />
            <BillingComponent />
        </div>
    )
}

export default MainComponentIndex
