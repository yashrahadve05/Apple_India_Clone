import { styled, Box } from "@mui/material";


const Component = styled(Box)({
  backgroundColor: '#000',
  color: '#f5f5f7',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'column',
  '& > img': {
    width: '33%'
  },
  '& > h2': {
    color: '#f5f5f7',
    fontSize: '56px',
    fontWeight: '600',
    margin: '0',
  },
  '& > p': {
    color: '#f5f5f7',
    fontSize: '28px',
    lineheight: '1.14286',
    fontWeight: '400',
    letterSpacing: '.007em',
    margin: '0',
  },
  '& > button': {
    fontSize: '17px',
    color: '#fff',
    backgroundColor: '#0071e3',
    padding: '11px 21px',
    margin: '15px auto',
    borderRadius: '30px',
    border: '0px solid'

  }
})


function Hero() {
  return (
    <Component>
        {/* https://www.apple.com/105/media/us/apple-events/2024/de49429c-da1f-446d-8280-ebc5c3830b40/anim/teaser/large.mp4 */}
        <img src="https://www.apple.com/v/apple-events/home/ag/images/overview/hero/hero__d6adldydsqye_large.png" alt="hero image" />
        <h2>Apple Event</h2>
        <p>Watch Online on 9 September at 10:30 PM IST</p>
        <button>Learn more</button>
    </Component>
  )
}

export default Hero