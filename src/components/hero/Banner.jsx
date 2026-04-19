import banneImg from '../../assets/banner.png'
import dot from '../../assets/Group 5.png'
import airPlay from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className='container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-15'>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <button className='bg-[#E1E7FF] rounded-full text-purple-500 py-1 px-3 text-xs flex gap-2 items-center mx-auto lg:mx-0'><img src={dot} alt="" /> New: AI-Powered Tools Available</button>
                <h1 className='font-extrabold text-5xl mt-5'>Supercharge Your Digital Workflow</h1>
                <p className='text-gray-400 mt-5'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products.</p>
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mt-5">
                    <button className='btn btn-primary rounded-full bg-linear-to-r from-blue-600 to-purple-700'>Explore Products</button>
                    <button className='btn btn-outline border-purple-700 rounded-full bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-700'><img src={airPlay} alt="" />Watch Demo</button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'><img height={590} width={500} src={banneImg} alt="" className="w-full max-w-xs sm:max-w-md lg:max-w-lg"  /></div>
        </div>
    );
};

export default Banner;