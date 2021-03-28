import {
    useStyle
} from './hooks'
import FlexType from './FlexType'
import React from 'react'

interface FlexCardProp {
    w : number, 
    h : number, 
    scale : number,
    i : number,
    type : FlexType
}

const FlexCards = (props : FlexCardProp) => {

    const {getBlockStyle, getChildStyle} = useStyle(props.i, props.w, props.h, props.scale)
    if (props.type === FlexType.STATIC) {
        return (
            <div style = {getBlockStyle()}>
            </div>
        )
    }
    return (
        <div style = {getChildStyle()}>
        </div>
    )
}

export default FlexCards 