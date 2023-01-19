import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotateCircle = (initRotate) => keyframes`
    0%{
        transform:rotateZ(${initRotate}deg);
    }
    100%{
        transform:rotateZ(${initRotate + 360}deg);
    }
`

const SLoading = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:10;
    display:grid;
    place-items:center;
    background-color:hsla(0,0%,50%,.3);
    
    .circleContainer{
        position:relative;
        width:100px;
    }    
    .circle-outer{        
        animation:${rotateCircle(0)} 1s cubic-bezier(.26,.66,.66,.26) infinite;
        
    }
    .circle-inner{
        animation:${rotateCircle(180)} 1.5s linear reverse infinite;
        position:absolute;
        top:15px;
        right:15px;
        left:15px;
        bottom:15px;
    }
    .circle{
        aspect-ratio:1;
        border-radius:50%;
        border-left:5px solid #43624F;
        border-top:5px solid #43624F;
        border-right:5px solid transparent;
        border-bottom:5px solid transparent;
    }
`

const Loading = () => {
  return (
    <SLoading>
        <div className="circleContainer">
            <div className="circle circle-outer"></div>
            <div className="circle circle-inner"></div>
        </div>
    </SLoading>
  )
}

export default Loading