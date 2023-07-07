import FurnitureBanner from '../images/r3.png'; // Tell webpack this JS file uses this image
const Banner = ({heightNum, ImageInfo}) => {


    return (
      <section className={`h-${heightNum} border-2 rounded-md`}>
       <img src={FurnitureBanner} className='h-72'/>
      </section>
    )
  }
  
  
  export default Banner;