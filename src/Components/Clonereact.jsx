import React, { useEffect, useState } from 'react'

const withMouseTrack = (WrappedComponent) => {
    // higher order functions
    return (props) => {
        const [pixel, setPixel] = useState({
            x: 0,
            y: 0,

        })
        useEffect(() => {
            const handleMouseOver = (e) => {
                setPixel({
                    x: e.clientX,
                    y: e.clientY,

                })
            }
            window.addEventListener("mousemove", handleMouseOver)
            return () => {
                window.removeEventListener("mousemove", handleMouseOver)
            }
        })
        return <WrappedComponent {...props} mousPosition={pixel} />
    }
}
const PointLogger = ({ mousPosition }) => {
    if (!mousPosition) {
        return null
    }
    return (
        <div style={{ border: "solid 2px black 40px" }}>
            <p>x:{mousPosition.x}</p>
            <p style={{ margin: "2px" }}>y:{mousPosition.y}</p>

        </div>
    )
}
const PanelLogger = ({ mousPosition }) => {
    if (!mousPosition) {
        return null
    }
    return (

        <div >
            (
            <p>x:{mousPosition.x}</p>
            <p style={{ margin: "2px" }}>y:{mousPosition.y}</p>)
        </div >
    )
}
const Row = ({ children, style }) => {
    const childstyle = {
        marginLeft: `${style}px`
    };
    return (
        <div style={{ display: "flex", background: "red" }}>
            {
                React.Children.map(children, (child, index) => {
                    // remember object will be passed not callback function
                    return (React.cloneElement(child, {
                        style: {
                            ...child.props.style,
                            ...(index > 0 ? childstyle : {})
                        }
                    }))
                })}
        </div>
    )

}
const ShowPoint = withMouseTrack(PointLogger)
const ShowPanel = withMouseTrack(PanelLogger)
const Clonereact = () => {
    return (
        <>
            <Row style={32}>
                <p>Hello</p>
                <p>2</p>
                <p>khala </p>
                <p>Poooo </p>
                <p>Ahhhhhahahha </p>
            </Row>
            <ShowPanel />
            <ShowPoint />
        </>
    )
}

export default Clonereact