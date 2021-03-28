import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 
export const useAnimatedScale = () => {
    const [scale, setScale] : [number, Function] = useState(0)
    const [animated, setAnimated] : [boolean, Function] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval : NodeJS.Timeout = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                    
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (i : number, w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / 10 
    return {
        getChildStyle() : CSSProperties {
            const width : string = `${size}px`
            const height : string = `${size}px`
            const display : string = 'flex'
            const justifyContent : string = 'center'
            const alignItems : string = 'center'
            const background : string = 'teal'
            return {
                width,
                height, 
                display,
                justifyContent, 
                alignItems,
                background 
            }
        },
        getBlockStyle() : CSSProperties {
            const width : string = `${size}px`
            const height : string = `${size}px`
            const position = 'absolute'
            const top : string = `${(h - size) * scale}px`
            const left : string = `${size * i}px`
            const background : string = 'teal'
            return {
                width, 
                height, 
                position, 
                top, 
                left, 
                background 
            }
        },
        getParentStyle() : CSSProperties {
            const height = `${size}px`  
            const width = `${size * i}px`
            const display = 'flex'
            return {
                width, 
                height,
                display
            }
        }
    }
}