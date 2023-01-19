import React from 'react'
import styled from 'styled-components';
import { useToggle } from '../hooks/useToggle'


const SAccordion = styled.div`    
    border-radius:1rem;
    background-color:#fff;
    overflow:hidden;

    .drop-btn{
        width:100%;
        border-radius:1rem;
        font-size:1.2rem;
        padding:1.5rem;
        text-align:left;
        text-transform:uppercase;
        color:#aaa;     
        background-color:#fff;
        transition:.2s;
    }
    .drop-btn:hover{
        color:white;
        background-color:#53624F;
    }

`

const Accordion = ({title, children}) => {

    const { status:show, toggleStatus:toggleShow } = useToggle();

    return (
        <SAccordion className="accordion">
            <button className="drop-btn" onClick={toggleShow}>{title}</button>
            { show && children }
        </SAccordion>
    )
}

export default Accordion