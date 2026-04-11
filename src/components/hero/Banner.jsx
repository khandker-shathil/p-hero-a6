import banneImg from '../../assets/banner.png'
import dot from '../../assets/Group 5.png'
import airPlay from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className='flex container mx-auto justify-between items-center mt-15'>
            <div>
                <button className='bg-[#E1E7FF] rounded-full text-purple-500 p-2 text-xs flex gap-2'><img src={dot} alt="" /> New: AI-Powered Tools Available</button>
                <h1 className='font-extrabold text-5xl mt-5'>Supercharge Your Digital Workflow</h1>
                <p className='text-gray-400 mt-5'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products.</p>
                <div className='flex mt-5 gap-2'>
                    <button className='btn btn-primary rounded-full bg-linear-to-r from-blue-600 to-purple-700'>Explore Products</button>
                    <button className='btn btn-outline border-purple-700 rounded-full bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-700'><img src={airPlay} alt="" />Watch Demo</button>
                </div>
            </div>
            <img height={590} width={500} src={banneImg} alt="" />
        </div>
    );
};

export default Banner;