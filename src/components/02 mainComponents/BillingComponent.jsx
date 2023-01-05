import React, { useContext, useState } from 'react'
import MainComponentIndex from './MainComponentIndex'
import { MainContext } from './MainContext'

const BillingComponent = () => {
    let { billing, setBilling, setDiscont } = useContext(MainContext)

    return (
        <div>
            <p>Monthly Billing</p>
            <input
                id="nome"
                type="checkbox"
                defaultChecked={billing}
                onChange={() => setBilling(!billing)}
            />
            <p>Yearly Billing</p>
            <div>-25%</div>
        </div>
    )
}

export default BillingComponent
