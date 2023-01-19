import React from 'react'
import { Navigate, redirect } from 'react-router-dom';
import styled from "styled-components";

const SAlert = styled.small`
    display:block;
    padding-block:1rem .25rem;

    ${props => props.success ? 
        `
            border-bottom:1px solid green;
            color:green;
        ` :
        `
            color:darkred;
            border-bottom:1px solid darkred;
        `
    }
`


const Alert = ({success, msg}) => {
  return (
    <SAlert success={success}>{msg}</SAlert>
  )
}

export default Alert