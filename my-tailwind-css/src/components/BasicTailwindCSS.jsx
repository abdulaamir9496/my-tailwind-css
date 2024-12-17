
const BasicTailwindCSS = () => {
    return (
        <>
            <div className="text-center my-4">
                <p className="text-purple-900 md:text-green-500 sm:text-pink-500">Lorem ipsum dolor sit.</p>
            </div>

            <div className="mt-3">
                <div className="max-w-sm mx-auto bg-slate-500 rounded-xl overflow-hidden md:max-w-2xl">
                    <div className="md:flex ">
                        <div>
                            <img
                                className="h-48 w-full object-cover md:h-full md:w-48"
                                src="https://images.pexels.com/photos/1114625/pexels-photo-1114625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="This is a dryFruits shop photo"
                            />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-pink-300 font-semibold">An amazing dryFruits shop</div>
                            <a
                                className="block mt-1 text-lg font-medium text-black hover:text-blue-400"
                                href="#">Tailwind CSS is amazing once you understand the <span className="bg-yellow-500 p-[2px] px-[14px]">power</span> of it.
                            </a>
                            <p className="mt-2 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aperiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicTailwindCSS
