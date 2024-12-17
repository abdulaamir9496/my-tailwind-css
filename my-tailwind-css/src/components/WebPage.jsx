
const WebPage = () => {
    return (
        <>
        {/* navbar starts here */}
            <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4">
                <div className="text-2xl font-bold text-indigo-700">Aamirs Dev Journey</div>
                <ul className="md:flex hidden font-semibold">
                    <li className="mx-[10px] cursor-pointer">Home</li>
                    <li className="mx-[10px] cursor-pointer">About Us</li>
                    <li className="mx-[10px] cursor-pointer">Contact Us</li>
                </ul>
                <div 
                    className="hidden md:block px-2 py-2 bg-indigo-600 text-white rounded font-bold cursor-pointer">
                        Login/ SignUp
                </div>

                <div className="md:hidden">
                    <a className="text-4xl" href="#">&#8801;</a>
                </div>
            </nav>
            {/* navbar ends here */}

{/* Image section starts here */}
            <header>
                <img
                    className="w-full hidden md:block"
                    src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" 
                    alt="" 
                />
                <img
                    className="w-full md:hidden"
                    src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" 
                    alt="" 
                />
            </header>
            {/* Image section ends here */}
        </>
    )
}

export default WebPage
