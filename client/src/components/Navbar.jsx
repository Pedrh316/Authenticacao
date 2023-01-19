import React from 'react'
import styled from 'styled-components'

const SNav = styled.nav`
    color:white;
    background-color:#53624F;
    margin-bottom:2rem;
    text-transform:uppercase;
    z-index:50;

    .container{
        display:flex;
        justify-content:space-between;
        *{
            color:white;
            margin:0;
        }
    }

    a{
        padding:.75rem 1.5rem;
        text-decoration:none;
    }

    .right{
        display:flex;
    }

    .actived{
        background-color:hsla(0,0%,0%,.4);
    }
`

const Navbar = ({children}) => {
  return (
      <SNav>
        <div className="container">
            {children}
        </div>
    </SNav>
  )
}

export default Navbar