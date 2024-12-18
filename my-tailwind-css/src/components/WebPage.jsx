
const WebPage = () => {
    return (
        <>
            {/* navbar starts here */}
            <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4">
                <div className="text-2xl font-bold text-indigo-700">Aamir's Dev Journey</div>
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

            {/* Our Students Section starts here */}
            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                <div className="w-full h-auto flex flex-wrap flex-col items-center">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">"Pure Hardwork, No Shortcuts!"</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 "></div>
                </div>

                <div className="w-full flex flex-wrap justify-evenly">
                    <div className="w-46 flex flex-col items-center mb-12">
                        <img className="w-44 h-44" src="/public/blended-learning.png" alt="" />
                        <p className="text-3xl font-bold text-white">600+</p>
                        <p className="text-3xl font-bold text-gray-500">Different Courses</p>
                    </div>

                    <div className="w-46 flex flex-col items-center mb-12">
                        <img className="w-44 h-44" src="/public/graduate (1).png" alt="" />
                        <p className="text-3xl font-bold text-white">700,000+</p>
                        <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
                    </div>

                    <div className="w-46 flex flex-col items-center mb-12">
                        <img className="w-44 h-44" src="/public/certificate.png" alt="" />
                        <p className="text-3xl font-bold text-white">10,000+</p>
                        <p className="text-3xl font-bold text-gray-500">Successful Transition</p>
                    </div>
                </div>
            </div>
            {/* Our Students Section ends here */}

            {/* Our Product Section starts here */}
            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                <div className="w-full h-auto flex flex-wrap flex-col items-center">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products"</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 "></div>
                </div>
                {/* outer box */}
                <div className="w-[90%] h-auto flex flex-wrap justify-around">
                    {/* First Card: Outer division */}
                    <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                        <img src="/public/computer-laboratory.png" alt="" />
                        <p  className="text-3xl font-bold text-white">Developer Skills lab</p>
                        <p  className="text-xl font-bold text-gray-500">SuperCharge your project development with our robust lab</p>
                    </div>
                    {/* Second Card: Outer division */}
                    <div className="w-64 flex flex-col items-center mb-12 rounded-xl p-2">
                        <img src="/public/job-portal.png" alt="" />
                        <p  className="text-3xl font-bold text-white">Job Portal</p>
                        <p  className="text-xl font-bold text-gray-500">Use exceptional templates for a stand-out resume minus the sign up process</p>
                    </div>
                    {/* Third Card: Outer division */}
                    <div className="w-64 flex flex-col items-center mb-12 rounded-xl p-2">
                        <img src="/public/experience.png" alt="" />
                        <p  className="text-3xl font-bold text-white">Experience Portal</p>
                        <p  className="text-xl font-bold text-gray-500">DJ Skills self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                    </div>
                    {/* Fourth Card: Outer division */}
                    <div className="w-64 flex flex-col items-center mb-12 rounded-xl p-2">
                        <img src="/public/affiliate-marketing.png" alt="" />
                        <p  className="text-3xl font-bold text-white">Become an Affiliate</p>
                        <p  className="text-xl font-bold text-gray-500">Explore affiliate marketing opportunities with DJ Skills and attain financial freedom.</p>
                    </div>
                    {/* Fifth Card: Outer division */}
                    <div className="w-64 flex flex-col items-center mb-12 rounded-xl p-2">
                        <img src="/public/hall-of-fame (2).png" alt="" />
                        <p  className="text-3xl font-bold text-white">Hall of Fame</p>
                        <p  className="text-xl font-bold text-gray-500">Our student placements and 100k+ career transitions speak volumes about our courses.</p>
                    </div>
                </div>
            </div>
            {/* Our Product Section ends here */}

            {/* Our Footer Section starts here */}
            <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
                <div>
                    <img className="w-40 h-16" src="https://pwskills.com/images/PWSkills-white.png" alt="" />
                    <p className="my-4">Email us: support@djskills.com</p>
                    <img className="w-32 h-32" src="/public/award.png" alt="" />
                </div>

                <div>
                    <h2 className="font-bold text-xl mt-4">DJ Skills</h2>
                    <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                            <p>About Us</p>
                            <p>FAQ's</p>
                            <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-xl mt-4">Products</h2>
                    <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                            <p>DJ Skills lab</p>
                            <p>Job Portal</p>
                            <p>Experience Portal</p>
                            <p>Become an Affiliate</p>
                            <p>Hall of Fame</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-xl mt-4">Links</h2>
                    <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                    <div>
                            <p>Discord Channel</p>
                            <p>DJ Youtube</p>
                            <p>Career</p>
                    </div>
                </div>
            </footer>
            {/* Our Footer Section ends here */}
        </>
    )
}

export default WebPage
