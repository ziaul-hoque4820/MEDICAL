import getImage from "../../utils/getImage";
import { FaHeartCircleCheck } from "react-icons/fa6";

function OurService() {
    return (
        <section>
            <div className="mt-14 px-4">
                <h4 className="text-center text-[20px] font-bold text-[#159EEC]">Care you can believe in</h4>
                <h2 className="text-center text-4xl font-bold mt-3">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 mt-10">
                {/* Service Menu */}
                <div className="lg:col-span-2 bg-[#FCFEFE] border-violet-900 border-[1px] p-4 text-center">
                    <div className="hover:bg-blue-950 hover:text-white p-8 cursor-pointer">
                        <img className="mx-auto mb-3" src={getImage(`../assets/images/medical 1.png`)} alt="products img" />
                        <span>Free Checkup</span>
                    </div>
                    <div className="hover:bg-blue-950 hover:text-white p-8 cursor-pointer">
                    <img className="mx-auto mb-3" src={getImage(`../assets/images/Vector-2.png`)} alt="products img" />
                        <span>Cardiogram</span>
                    </div>
                    <div className="hover:bg-blue-950 hover:text-white p-8 cursor-pointer">
                    <img className="mx-auto mb-3" src={getImage(`../assets/images/Vector.png`)} alt="products img" />
                        <span>Dna Testing</span>
                    </div>
                    <div className="hover:bg-blue-950 hover:text-white p-8 cursor-pointer">
                    <img className="mx-auto mb-3" src={getImage(`../assets/images/Vector-1.png`)} alt="products img" />
                        <span>Blood Bank</span>
                    </div>
                    <div className="bg-blue-950 hover:bg-blue-800">
                        <button className="text-center text-white py-2 w-full">View All</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-7 p-4">
                    <h3 className="text-2xl font-bold text-center mt-6">A passion for putting patients first.</h3>
                    <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-9">
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Passion for Healing</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">All our best</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Legacy of Excellence</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Always Caring</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Believe in Us</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">5-Star Care</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Passion for Healing</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">All our best</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Believe in Us</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi animi deserunt deleniti quo! Voluptatibus impedit nemo quaerat!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex enim optio, consequatur natus autem veniam nesciunt quae deleniti itaque architecto eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum ab suscipit, magnam dolorem odit necessitatibus? Iste perspiciatis unde ipsam, corporis ab nulla, fugit assumenda rem commodi quisquam repellendus ea.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum hic voluptas sit repellendus officiis, vitae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere vel ex officiis quia quam voluptatum aliquid, sed enim cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum necessitatibus debitis aliquid porro eaque quae perferendis, odio fugit illo!.</p>
                    </div>
                </div>

                {/* Side Images */}
                <div className="lg:col-span-3 p-4 text-center">
                    <img className="w-full my-4" src={getImage(`../assets/images/our-service-1.png`)} alt="products img" />
                    <img className="w-full my-4" src={getImage(`../assets/images/our-service-2.png`)} alt="products img" />
                </div>
            </div>
        </section>
    );
}

export default OurService;
