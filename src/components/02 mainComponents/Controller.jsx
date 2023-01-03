import React, { useEffect } from 'react'
import styled from 'styled-components'
import imagem from '../../assets/images/icon-slider.svg'
import './style.css'
// excess height to improve interactive area / accessibility
const height = '36px'
const thumbHeight = 36
const trackHeight = '16px'
const img = '../../assets/images/icon-slider.svg'

// colours
const upperColor = '#edf5f9'
const lowerColor = '#01ff3c'
const thumbColor = '#000000'
const thumbHoverColor = '#000000'
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
    width: 100%;
    margin: 0;
    height: ${height};
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${height};
        background: ${lowerBackground};
    }

    &::-webkit-slider-thumb {
        background-image: url(${img});
        background-position: center;
        background-size: contain;

        position: relative;
        appearance: none;
        height: ${thumbHeight}px;
        width: ${thumbHeight}px;
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: ${makeLongShadow(upperColor, '-10px')};
        transition: background-color 150ms;
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
    }

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
    return (
        <div id="jonas">
            <Range type="range" />
        </div>
    )
}

export default Controller
