import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import imagem from '../../assets/images/icon-slider.svg'
import { MainContext } from './MainContext'
import './style.css'

// excess height to improve interactive area / accessibility
const height = '100px'
const thumbHeight = 30
const trackHeight = '10px'
const img = '../../assets/images/icon-slider.svg'

// colours
const upperColor = '#ecf0fb'
const lowerColor = '#99f3e3'
const thumbColor = '#11d8c5'
const thumbHoverColor = '#26a297'
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
    let i = 18
    let shadow = `${i}px 0 0 ${size} ${color}`

    for (; i < 706; i++) {
        shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`
    }

    return shadow
}

const Wrapper = styled.div`
    /* width:100%; */
`
const Range = styled.input`
    overflow: hidden;
    display: block;
    appearance: none;
    max-width: 700px;
    width: 90%;
    margin: 0;
    height: ${height};
    cursor: pointer;
    outline: none;

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${height};
        background: ${lowerBackground};
        border-radius: 100%;
    }

    &::-webkit-slider-thumb {
        background-image: url(${img});
        background-position: center;
        background-size: contain;

        position: relative;
        appearance: none;
        height: 4rem;
        width: 4rem;
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: ${makeLongShadow(upperColor, '-25px')};
        transition: background-color 150ms;
        cursor: pointer;
    }
    &:active::-webkit-slider-thumb {
        cursor: grabbing;
    }
    &::-moz-range-track,
    &::-moz-range-progress {
        width: 100%;
        height: ${height};
        background: ${upperBackground};
    }

    &::-moz-range-progress {
        background: ${lowerBackground};
    }

    &::-moz-range-thumb {
        appearance: none;
        margin: 0;
        height: ${thumbHeight};
        width: ${thumbHeight};
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        transition: background-color 150ms;
    }

    &::-ms-track {
        width: 100%;
        height: ${height};
        border: 0;
        /* color needed to hide track marks */
        color: transparent;
        background: transparent;

        &::-ms-fill-lower {
            background: ${lowerBackground};
        }

        &::-ms-fill-upper {
            background: ${upperBackground};
        }

        &::-ms-thumb {
            appearance: none;
            height: ${thumbHeight};
            width: ${thumbHeight};
            background: ${thumbColor};
            border-radius: 100%;
            border: 0;
            transition: background-color 150ms;
            /* IE Edge thinks it can support -webkit prefixes */
            top: 0;
            margin: 0;
            box-shadow: none;
        }

        &:hover,
        &:focus {
            &::-webkit-slider-thumb {
                background-color: ${thumbHoverColor};
            }
        }
        &::-moz-range-thumb {
            background-color: ${thumbHoverColor};
        }
        &::-ms-thumb {
            background-color: ${thumbHoverColor};
        }
    }
`
const Teste = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;
`

const Controller = () => {
    let { rangeValue, setRangeValue } = useContext(MainContext)

    return (
        <div className="flex items-center justify-center border " id="jonas">
            <Range
                className="rounded-full"
                type="range"
                min="1"
                max="4"
                onChange={(e) => setRangeValue(e.target.value)}
            />
        </div>
    )
}

export default Controller
