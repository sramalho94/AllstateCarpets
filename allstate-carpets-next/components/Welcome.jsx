import bg from './/../public/bgpic.jpg'

const Welcome = () => {

  return (
<div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      opacity: '50%'
    }}> Welcome </div>
  )
}

export default Welcome