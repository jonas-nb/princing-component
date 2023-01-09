import React from 'react'

const FooterButton = () => {
    const menssageSubmit = function () {
        alert('Muito obrigado por testar o componente 😍')
    }

    return (
        <div>
            <button
                onClick={menssageSubmit}
                className="btn block mt-10 lg:mt-0 rounded-3xl normal-case w-48 m-auto focus:outline-[#39e4a0]"
            >
                Start my trial
            </button>
        </div>
    )
}

export default FooterButton
