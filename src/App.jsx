import React from 'react'
import ArticleHeaderIndex from './components/01 articleHeader/ArticleHeaderIndex'
import MainComponentIndex from './components/02 mainComponents/MainComponentIndex'
import { MainProvider } from './components/02 mainComponents/MainContext'
import FooterComponentIndex from './components/03 FooterCompoents/FooterComponentIndex'

const App = () => {
    return (
        <div className="flex flex-col w-full lg:w-[50rem]">
            <MainProvider>
                <ArticleHeaderIndex />
                <MainComponentIndex />
                <FooterComponentIndex />
                <p className="text-center mt-5">
                    Create with <span className="line-through">❤</span> React by
                    Jonas Batista
                </p>
            </MainProvider>
        </div>
    )
}

export default App
