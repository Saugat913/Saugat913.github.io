
function HomePage() {
    return <div className='curve-bg-style flex items-center flex-grow bg-[url("/curve_smd.svg")] sm:bg-[url("/curve_1.svg")]' >
        <div className='border m-8 p-8  pb-16 pl-8 flex justify-center w-[80%] md:w-[60%] xl:w-[40%] flex-col '>
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
    </div>
}

export default HomePage;