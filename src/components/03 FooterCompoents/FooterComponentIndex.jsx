import React from 'react'
import CheckKeys from './CheckKeys'
import FooterButton from './FooterButton'

const FooterComponentIndex = () => {
    return (
        <div className="m-auto w-11/12 mb-20 h-[16rem] rounded-b-lg drop-shadow-sm bg-white border-t">
            <CheckKeys />
            <FooterButton />
            <p className="text-center mt-20">
                Create with <span className="line-through">❤</span> React by
                Jonas Batista
            </p>
        </div>
    )
}

export default FooterComponentIndex
