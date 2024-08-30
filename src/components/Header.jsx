import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { logo, navData } from '../constants/constant';
import { Box, styled, Typography } from "@mui/material"



const Component = styled(Box)({
  backgroundColor: 'rgba(69, 69, 69, 1)',
  height: 44,
  display: 'flex',
  justifyContent: 'center',
})

const NavBar = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '70%',
  color: 'white',
  fontWeight: '700',
})

function Header() {
  return (
        <Component>
            <NavBar>
                <img src={logo} alt="logo" style={{ width: 17, color: 'white'}} />
                {
                  navData.map(nav => (
                    <Typography key={nav} style={{ fontSize: 12, fontWeight: 500, color: "#d9d9d9" }}>
                      {nav}
                    </Typography>
                  ))
                }
                <SearchIcon fontSize='small' />
                <WorkOutlineIcon fontSize='small' />
            </NavBar>
        </Component>
  )
}

export default Header