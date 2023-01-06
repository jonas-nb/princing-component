import React from 'react'
import BillingComponent from './BillingComponent'
import Controller from './Controller'
import MoneyComponent from './MoneyComponent'
import PageViewsComponent from './PageViewsComponent'
import './style.css'
const MainComponentIndex = () => {
    return (
        <div className="m-auto mt-10 border border-red-500 w-11/12 h-[21rem] rounded-lg drop-shadow-sm bg-white ">
            <PageViewsComponent />
            <Controller />
            <MoneyComponent />
            <BillingComponent />
        </div>
    )
}

export default MainComponentIndex
