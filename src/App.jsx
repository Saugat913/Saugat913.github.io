import './App.css'
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function App() {


  return (
    <div className='flex flex-col h-full'>
      {/* Navigation Section */}

      <div className='flex p-5 items-center'>
        <img src="/logo.svg" className='w-8 h-8 sm:w-12 sm:h-12 mr-8' />
        <div className='flex flex-grow '></div>
        <div className='flex justify-end rounded-md border p-2 pr-4 pl-4'>
          <span className='nav-bar-style-common'>Home</span>
          <span className='nav-bar-style-common'>Projects</span>
          <span className='nav-bar-style-common'>About</span>
          <span className='nav-bar-style-common'>Blog</span>
        </div>
        <span className='ml-8  pt-3 pb-3 pr-5 pl-5 invisible sm:visible text-primary_color rounded-md border cursor-pointer'>Let's Chat</span>
      </div>
      {/* Home Main Section */}
      <div className=' flex h-full  mt-3 pt-12'>

        <div className='w-20 flex flex-col-reverse pb-4 items-center'>
          <div className='w-[2px] h-28 bg-black'></div>
          <FiGithub size={24} className='mb-6' />
          <MdOutlineEmail size={24} className='mb-6' />
        </div>

        <div className='curve-bg-style flex-grow'>
          <div className='border m-8 p-16 pl-16 flex justify-center w-[80%] md:w-[60%] xl:w-[40%] flex-col '>
            <span className='font-Montagu-Slab  text-2xl'>
              Hi ! I Am
              <br />
              Saugat Kandel
            </span>
            <br />

            <span className='text-sm'>
              Computer engineering student who loves building apps with Flutter
              and crafting smooth backend solutions. Let's bring ideas to life!
            </span>

            <div className='mt-8  mr-auto p-4 rounded-md bg-primary_color text-white inline-flex cursor-pointer'>
              Contact Me
            </div>
          </div>
          {/* <div className='flex-1'></div> */}
        </div>
      </div>
    </div>
  )
}

export default App
