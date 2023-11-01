import { Carousel } from 'flowbite-react';

const SlidingInterval =() => {
  
  return (
    <Carousel slideInterval={5000} className='md:h-[36rem] h-72 '>
      <img
        alt="bg_caroussel_sea"
        src="img/quality.webp"
      />
      <img
        alt="bg_caroussel_terre"
        src="img/kid.webp"
      />
      <img
        alt="bg_caroussel_fire"
        src="img/tree.webp"
      />
     
    </Carousel>
  )
 
}

export default SlidingInterval

