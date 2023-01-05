import React, { useContext, useState } from 'react'
import MainComponentIndex from './MainComponentIndex'
import { MainContext } from './MainContext'

const BillingComponent = () => {
    let { billing, setBilling } = useContext(MainContext)

    return (
        <div className="border border-blue-500 flex justify-around items-center w-full h-10">
            <p>Monthly Billing</p>
            <input
                id="nome"
                type="checkbox"
                defaultChecked={billing}
                onChange={() => setBilling(!billing)}
            />
            <p>Yearly Billing</p>
            <div className="flex justify-center items-center w-14 h-7 bg-[#ffeae5] rounded-2xl text-md text-[#ff8c6e] font-[600]">
                -25%
            </div>
        </div>
    )
}

export default BillingComponent
