import React from 'react'
import BillingComponent from './BillingComponent'
import Controller from './Controller'
import MoneyComponent from './MoneyComponent'
import PageViewsComponent from './PageViewsComponent'
import './style.css'
const MainComponentIndex = () => {
    return (
        <div className="card m-auto mt-10 rounded-lg border w-11/12 drop-shadow-sm">
            <PageViewsComponent />
            <Controller />
            <MoneyComponent />
            <BillingComponent />
        </div>
    )
}

export default MainComponentIndex
