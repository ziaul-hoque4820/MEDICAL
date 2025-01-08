import getImage from '../utils/getImage';

function HeroSection() {
    return (
        <section className="container mx-auto md:flex items-center">
            <div
                className="w-full lg:h-[500px] sm:h-[380px]"
                style={{
                    backgroundImage: `url(${getImage('bg-n2.jpg')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="text-center px-5 lg:py-40 md:text-left md:py-10 md:w-1/2 sm:py-20">
                    <span className='text-[#273c75] text-[18px] font-bold '>Caring for Life</span>
                    <h1 className="text-5xl text-white font-bold mb-5 mt-5 font-yeseva ">Leading the Way in Medical Excellence</h1>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 font-workSans">
                        Our Services
                    </button>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;

