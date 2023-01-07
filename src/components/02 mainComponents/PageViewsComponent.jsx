import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './MainContext'

const PageViewsComponent = () => {
    let [view, setView] = useState()
    let { rangeValue } = useContext(MainContext)

    //muda o valor conforme o controller
    useEffect(() => {
        switch (rangeValue) {
            case '1':
                setView(100)
                break
            case '2':
                setView(300)
                break
            case '3':
                setView(500)
                break
            default:
                setView(900)
                break
        }
    }, [rangeValue])

    return (
        <div className="mt-10">
            <h2 className="text-center tracking-widest uppercase font-[500] text-[#868fa6]">
                {view}k pageviews
            </h2>
        </div>
    )
}

export default PageViewsComponent
