import React, { useContext } from 'react'
import { MainContext } from './MainContext'

const BillingComponent = () => {
    let { billing, setBilling } = useContext(MainContext)

    return (
        <div className="w-full lg:w-8/12 lg:m-auto flex justify-around items-center mt-10">
            <p className="text-[#868fa6] font-[500] text-[0.75]">
                Monthly Billing
            </p>
            <input
                className={`${
                    billing === false
                        ? 'bg-default toggle'
                        : 'bg-[#11d8c5] border border-[#11d8c5] toggle'
                }`}
                id="nome"
                type="checkbox"
                defaultChecked={billing}
                onChange={() => setBilling(!billing)}
            />
            <p className="text-[#868fa6] font-[500]">Yearly Billing</p>
            <div className="flex justify-center items-center w-14 lg:w-36 h-7 bg-[#ffeae5] rounded-2xl text-md text-[#ff8c6e] font-[600]">
                -25% <span className="hidden lg:block ml-1">Discount</span>
            </div>
        </div>
    )
}

export default BillingComponent
