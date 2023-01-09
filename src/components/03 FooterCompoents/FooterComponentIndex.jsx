import React from 'react'
import CheckKeys from './CheckKeys'
import FooterButton from './FooterButton'

const FooterComponentIndex = () => {
    return (
        <div className="m-auto w-11/12 mb-20 h-[16rem] rounded-b-lg drop-shadow-sm bg-white border-t lg:flex lg:justify-around lg:items-center">
            <CheckKeys />
            <FooterButton />
        </div>
    )
}

export default FooterComponentIndex
