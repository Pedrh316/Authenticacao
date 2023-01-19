import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SUnauthorized = styled.div`
    max-width:500px;
    margin:4rem auto;
`

const Unauthorized = ({to, title}) => {
    return (        
        <SUnauthorized className='unauthorized'>
            <h1 className="subtitle">Voce não tem permissão para acessar esta rota. Ir para a <Link to={to}>{title}</Link></h1>
        </SUnauthorized>
    )
}

export default Unauthorized