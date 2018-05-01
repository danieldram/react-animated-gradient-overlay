import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import shortid from "shortid"

export class GradientOverlay extends Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(["radial", "linear"]),
        direction: PropTypes.oneOf(["left, right, bottom, top"]),
        src: PropTypes.string,
        colors: PropTypes.arrayOf(PropTypes.array),
        transition: PropTypes.number,
    }   

    static defaultProps = {
        className: "grad-overlay",
        transition: .25,
        opacity: 0.5,
        type: "linear",
        direction:"bottom",
        colors: [["black", "transparent"],["blue", "transparent"]],
        src: ""
    }

    constructor(){
        super()
        this.animationId = shortid.generate()
    }

    render_overlay = (color, i) => {
        const {type, direction, src, opacity, transition, className } = this.props
        const img = !!src ? `,url(${src})` : ""

        const Overlay = styled.div.attrs({key:shortid.generate(), overlaygroup:className+i})`
            position:absolute;
            opacity: 0;
            z-index: 2;
            top:0;
            opacity:0;
            background: ${type}-gradient(to ${direction}, ${color.toString()}) ${img};
            animation: ${this.animationId} ${transition}s ${i==0? i : (i)*transition}s infinite alternate;
            width:100%;
            height:100%;
        ` 
        return <Overlay key={shortid.generate()}/>
    }

    render(){
        const {type, direction, src, colors, opacity, transition } = this.props
        const img = !!src ? `,url(${src})` : ""

        const Container = styled.div`
            position:relative;
            height:100%;
        `
        
        const Children = styled.div`
            position:absolute;
            top:0;
            left:0;
            z-index:1;
            height:100%;
            & > img {
                max-width:100%;
                width:100%;
            }
        `
        
        const Animation = styled.span`
            @keyframes ${this.animationId} {
                from {opacity:0;}
                to  {opacity:${opacity};}
            }
        `

       
        return(
            <Container>
                <Animation/>
                {colors.map((c, i) => this.render_overlay(c, i))}
                <Children>
                    {this.props.children}
                </Children>
            </Container>
        )
    }

}