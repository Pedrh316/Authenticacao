import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SNotFound = styled.div`
    max-width:500px;
    margin:4rem auto;

    .title{
        font-size:1.3rem;
    }
`

const NotFound = () => {
  return (
    <SNotFound className="notfound"><h1 className="title">Esta página não existe. Voltar para <Link to="/">Home</Link></h1></SNotFound>
  )
}

export default NotFound