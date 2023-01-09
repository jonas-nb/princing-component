import React from 'react'
import BillingComponent from './BillingComponent'
import Controller from './Controller'
import MoneyComponent from './MoneyComponent'
import PageViewsComponent from './PageViewsComponent'
import './style.css'
const MainComponentIndex = () => {
    return (
        <div className="m-auto border-transparent mt-10 w-11/12 h-[21rem] rounded-t-lg drop-shadow-sm bg-white border border-blue-500">
            <div className="border border-purple-600 lg:grid lg:grid-rows-2 lg:grid-cols-2">
                <div className="border border-black lg:order-1">
                    <PageViewsComponent />
                </div>
                <div className="border border-black lg:col-span-2 lg:order-3">
                    <Controller />
                </div>
                <div className="border border-black  lg:order-2 ">
                    <MoneyComponent />
                </div>
            </div>

            <BillingComponent />
        </div>
    )
}

export default MainComponentIndex
