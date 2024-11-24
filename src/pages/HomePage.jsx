import HeroImage from '../assets/images/heroimage2.png';
import AboutImage from '../assets/images/about.svg';

import Proyek1 from '../assets/images/proyek-1.webp';
import Proyek2 from '../assets/images/proyek-2.webp';
import Proyek3 from '../assets/images/proyek-3.webp';
import Proyek4 from '../assets/images/proyek-4.webp';
import Proyek5 from '../assets/images/proyek-5.webp';

const HomePage = () => {
  return(
    <div className="homepage pb-10">
    <div className="container mx-auto px-4">
      <div className="hero grid md:grid-cols-2  grid-cols-1 items-center gap-20 pt-32" >
        <div className="box">
          <h1 className="lg:text-5xl/tight text-3xl font-semibold mb-7">Membuat Website Dengan <span className='font-bold text-lime-500 underline'>Tailwind CSS</span></h1>
          <p className="text-base/8 mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <a href="#" className='bg-lime-500 transition-all hover:bg-lime-600 rounded-full py-2 px-4 text-white shadow'>Tentang Kami <i className="ri-eye-line ms-1"></i></a>
        </div>
        <div className="box">
          <img src={HeroImage} alt="Hero Images" className='md:w-full w-[400px] mx-auto md:m-0 '/>
        </div>
      </div>
      <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id='about'>
        <div className="box md:order-1 order-2">
          <img src={AboutImage} alt="About Image" className='lg:w-[500px] w-[400px] mx-auto md:m-0 ' />
        </div>
        <div className="box md:order-2 order-1">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Membuat Website Dengan <span className='font-bold text-lime-500 underline'>Tailwind CSS</span></h1>
        <p className="text-base/loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> 
        </div>
      </div>

      <div className="services pt-32" id='services'>
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="box bg-lime-400 p-4 rounded-lg shadow ">
            <i className="ri-number-1 text-3xl font-extrabold text-black"></i>
            <h3 className='font-bold text-xl text-black mt-6 mb-2'>Service Name 1</h3>
            <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium odit ab nesciunt saepe magni!</p>
          </div>
          <div className="box bg-lime-400 p-4 rounded-lg shadow ">
            <i className="ri-number-2 text-3xl font-extrabold text-black"></i>
            <h3 className='font-bold text-xl text-black mt-6 mb-2'>Service Name 2</h3>
            <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium odit ab nesciunt saepe magni!</p>
          </div>
          <div className="box bg-lime-400 p-4 rounded-lg shadow ">
            <i className="ri-number-3 text-3xl font-extrabold text-black"></i>
            <h3 className='font-bold text-xl text-black mt-6 mb-2'>Service Name 3</h3>
            <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium odit ab nesciunt saepe magni!</p>
          </div>
        </div>
      </div>

      <div className="proyek pt-32" id='project'>
      <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="proyek-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="box p-2 shadow bg-lime-50 rounded-lg"> 
          <img src={Proyek1} alt="Proyek1" className='w-full h-[220px]' />
          <h3 className='font-bold text-xl text-black mt-4 mb-2 text-center'>Proyek Name 1</h3>
          <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box p-2 shadow bg-lime-50 rounded-lg"> 
          <img src={Proyek2} alt="Proyek2" className='w-full h-[220px]' />
          <h3 className='font-bold text-xl text-black mt-4 mb-2 text-center'>Proyek Name 2</h3>
          <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box p-2 shadow bg-lime-50 rounded-lg"> 
          <img src={Proyek3} alt="Proyek3" className='w-full h-[220px]' />
          <h3 className='font-bold text-xl text-black mt-4 mb-2 text-center'>Proyek Name 3</h3>
          <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box p-2 shadow bg-lime-50 rounded-lg"> 
          <img src={Proyek4} alt="Proyek4" className='w-full h-[220px]' />
          <h3 className='font-bold text-xl text-black mt-4 mb-2 text-center'>Proyek Name 4</h3>
          <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box p-2 shadow bg-lime-50 rounded-lg"> 
          <img src={Proyek5} alt="Proyek5" className='w-full h-[220px]' />
          <h3 className='font-bold text-xl text-black mt-4 mb-2 text-center'>Proyek Name 5</h3>
          <p className='text-base/loose text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}       

 export default HomePage