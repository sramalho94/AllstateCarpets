import bg from './/../public/bgpic.jpg'

const Welcome = () => {

  return (
<div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      opacity: '50%'
    }} className="flex flex-row-reverse"> 
    <div className=''>Welcome











    
    </div>
    <div>
        Services Provided
    </div>
    </div>
  )
}

export default Welcome