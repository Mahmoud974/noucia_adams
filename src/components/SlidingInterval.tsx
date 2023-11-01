import { Carousel } from 'flowbite-react';

const SlidingInterval =() => {
  
  return (
    <Carousel slideInterval={5000} className='md:h-[36rem] h-72 '>
      <img
        alt="bg_caroussel_sea"
        src="./src/assets/quality.webp"
      />
      <img
        alt="bg_caroussel_terre"
        src="./src/assets/kid.webp"
      />
      <img
        alt="bg_caroussel_fire"
        src="./src/assets/tree.webp"
      />
     
    </Carousel>
  )
 
}

export default SlidingInterval

