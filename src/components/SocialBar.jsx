import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function SocialBar() {
    return <div className='w-10 flex flex-col-reverse items-center left-0 absolute top-0 bottom-0 h-full'>
        <div className='w-[2px] h-28 bg-black'></div>
        <FiGithub size={24} className='mb-6' />
        <MdOutlineEmail size={24} className='mb-6' />
    </div>
}



export default SocialBar