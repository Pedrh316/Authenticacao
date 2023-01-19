import React from 'react'
import styled from 'styled-components'

const SCard = styled.section`
    background-image:linear-gradient(225deg, #a0f8be 30px, #eee 30px);
    max-width:max-content;
    padding:2rem;        
    margin-bottom:2rem;
    position:relative;
    border-radius:1rem;
    max-width:600px;

    .read-more{            
        position:absolute;
        width:100%;
        left:0;
        bottom:0;
        padding-block:.1rem;
        background-color:#ccc;

        .icon{
            color:#fff;
            font-size:1.2rem;
        }
    }
    .read-more:hover{
        background-color:#bbb;
    }
`

const Card = ({children}) => {

  return (
    <SCard className="card">
        {children}
    </SCard>
  )
}

export default Card