import React from 'react'
import { AppBar,Toolbar } from '@mui/material'
import styled from '@emotion/styled'

import Logo from '../../assets/OIP.jpg'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;

`

function Header() {
  return (
    <Container position='static'>
        <Toolbar>
            <img src={Logo} alt="Codepen Logo" width='55' />
        </Toolbar>
    </Container>
  )
}

export default Header