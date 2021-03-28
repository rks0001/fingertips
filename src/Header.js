import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
           <HeaderLogo> 
                <h1>Fingertips</h1>
            </HeaderLogo>
        
        </Container>
    )
}

export default Header;

const Container =styled.div`
height:60px;
background-color:#4DA1A9;
display:flex;
align-items:center;
`

const HeaderLogo = styled.div`
h1{
    width:100px;
    margin-left:10px;
}
`
