import {
    useAnimatedScale, 
    useDimension, 
    useStyle
} from './hooks'
import React, { ReactNode } from 'react'
import FlexCard from './FlexCard'
import FlexType from './FlexType'
interface SimpleProps {

}


const getStaticCards : Function = (i : number, w : number, h : number, scale : number) : Array<ReactNode> => {
    const cards : Array<ReactNode> = []
    for(var j = 0; j < i; j++) {
        cards.push(
            (
            <FlexCard  i = {i} scale = {1} w = {w} h = {h} type = {FlexType.STATIC}>
                {j + 1}
            </FlexCard>
            )
        )
    }
    return cards 
}
const FlexCardContainer : React.FC<SimpleProps> = (props : SimpleProps) => {
    const {i, scale, start} = useAnimatedScale()
    const {w, h} = useDimension()
    const {getParentStyle, getButtonStyle} = useStyle(i, w, h, scale)
    
    return (
        <React.Fragment>
            <div style =  {getParentStyle()}>
                {getStaticCards(i, w, h, scale)}
            </div>
            <FlexCard i = {i} w = {w} h = {h} scale = {scale} type = {FlexType.DYNAMIC}>
                {i + 1}
            </FlexCard>
            <button onClick = {() => {
                start()
            }}style = {getButtonStyle()}>add new item</button>
        </React.Fragment>
    ) 
}

export default FlexCardContainer 

