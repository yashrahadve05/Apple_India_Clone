import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Component = styled(Box)({
  width: '100%',
  height: '600px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '47',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
})

const Heading = styled(Box)({
  marginTop: '50px',
  fontSize: '56px',
  fontWeight: '600'
})

const SubHeading = styled(Box)({
  fontSize: '28px',
  fontWeight: '600',
  padding: '0 0 5px 0'
})

const linkStyle = {
  color: '#2997ff',
  fontSize: '22px',
  margin: '0 30px 0 0',
  cursor: 'pointer'
}


function Section({ data }) {
  return (
    <Component style={{ background: `url(${data.imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{color: data.headColor}}>{data.heading}</Heading>
      <SubHeading style={{color: data.subHeadColor}}>{data.subHeading}</SubHeading>
      <Typography>
        <Typography component="span" style={linkStyle}>Learn more &gt;</Typography>
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  )
}

export default Section