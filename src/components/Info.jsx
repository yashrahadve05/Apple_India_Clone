import {  styled, Typography, Box } from "@mui/material"
import { blue } from "@mui/material/colors"

const Component = styled(Box)({
  height: '44px',
  alignContent: 'center',
  backgroundColor: '#1d1d1f',
  color: '#fff',
  textAlign: 'center',
  '& > p': {
    fontSize: '14px'
  }
})

function Info() {
  return (
    <Component>
      <Typography>
        Get up to ₹8000.00 instant cashback on selected products with eligible American Express, Axis Bank and ICICI Bank cards.‡ <span style={{color: '#2997ff'}}>Shop &gt;</span>
      </Typography>
    </Component>
  )
}

export default Info