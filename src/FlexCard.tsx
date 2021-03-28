import {
    useStyle
} from './hooks'
import FlexType from './FlexType'
import React, {ReactNode} from 'react'

interface FlexCardProp {
    
    children?: ReactNode,
    w : number, 
    h : number, 
    scale : number,
    i : number,
    type : FlexType
}

const FlexCard   : React.FC<FlexCardProp> = (props : FlexCardProp) => {

    const {getBlockStyle, getChildStyle} = useStyle(props.i, props.w, props.h, props.scale)
    if (props.type === FlexType.DYNAMIC) {
        return (
            <div style = {getBlockStyle()}>
                {props.children}
            </div>
        )
    }
    return (<React.Fragment>
            <div style = {getChildStyle()}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default FlexCard