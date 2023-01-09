import React from 'react'
import BillingComponent from './BillingComponent'
import Controller from './Controller'
import MoneyComponent from './MoneyComponent'
import PageViewsComponent from './PageViewsComponent'
import './style.css'
const MainComponentIndex = () => {
    return (
        <div className="m-auto border-transparent mt-10 w-11/12 h-[21rem] rounded-t-lg drop-shadow-sm bg-white">
            <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2">
                <div className="lg:order-1">
                    <PageViewsComponent />
                </div>
                <div className="lg:col-span-2 lg:order-3">
                    <Controller />
                </div>
                <div className="lg:order-2 ">
                    <MoneyComponent />
                </div>
            </div>

            <BillingComponent />
        </div>
    )
}

export default MainComponentIndex
