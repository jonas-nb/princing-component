import React from 'react'
import { BsCheck } from 'react-icons/bs'
import './style.css'
const CheckKeys = () => {
    return (
        <div className="w-7/12 lg:w-56 h-24 m-auto lg:m-0 text-[#868fa6] mt-8 lg:mt-0 flex flex-col justify-between">
            <div className="flex items-center lg:items-start gap-x-4 lg:gap-x-0 justify-center lg:justify-start">
                <BsCheck className="icone" />
                <p>Unlimited websites</p>
            </div>
            <div className="flex items-center lg:items-start gap-x-4 lg:gap-x-0 justify-center lg:justify-start">
                <BsCheck className="icone" />
                <p>100% dara ownership</p>
            </div>
            <div className="flex items-center lg:items-start gap-x-4 lg:gap-x-0 justify-center lg:justify-start">
                <BsCheck className="icone" />
                <p>Email reports</p>
            </div>
        </div>
    )
}

export default CheckKeys
