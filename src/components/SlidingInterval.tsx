import { Carousel } from 'flowbite-react';

const SlidingInterval =() => {
  
  return (
    <Carousel slideInterval={5000} className='md:h-[46rem] h-72 '>
      <img
        alt="bg_caroussel_sea"
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="bg_caroussel_terre"
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="bg_caroussel_fire"
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="bg_caroussel_water"
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="bg_caroussel"
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
 
}

export default SlidingInterval

