
function NavigationBar() {
    return <div className='flex p-5 items-center w-full sticky top-0 bg-white'>
        <img src="/logo.svg" className='w-8 h-8 sm:w-12 sm:h-12 mr-8' />
        <div className='flex flex-grow '></div>
        <div className='justify-end rounded-md border p-2 pr-4 pl-4 hidden sm:flex'>
            <span className='nav-bar-style-common'>Home</span>
            <span className='nav-bar-style-common'>Projects</span>
            <span className='nav-bar-style-common'>About</span>
            <span className='nav-bar-style-common'>Blog</span>
        </div>
        <span className='ml-8  pt-3 pb-3 pr-5 pl-5  hidden sm:block text-primary_color rounded-md border cursor-pointer'>Let's Chat</span>
        <img src="/menu_icon.svg" className='w-5 h-5 sm:hidden' />
    </div>
}

export default NavigationBar;