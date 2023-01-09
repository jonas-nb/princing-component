import React from 'react'
import { BsCheck } from 'react-icons/bs'
import './style.css'
const CheckKeys = () => {
    return (
        <div className="w-7/12 h-24 m-auto text-[#868fa6] mt-8 flex flex-col justify-between">
            <div className="flex items-center gap-x-4 justify-center">
                <BsCheck className="icone" />
                <p>Unlimited websites</p>
            </div>
            <div className="flex items-center gap-x-4 justify-center">
                <BsCheck className="icone" />
                <p>100% dara ownership</p>
            </div>
            <div className="flex items-center gap-x-4 justify-center">
                <BsCheck className="icone" />
                <p>Email reports</p>
            </div>
        </div>
    )
}

export default CheckKeys
