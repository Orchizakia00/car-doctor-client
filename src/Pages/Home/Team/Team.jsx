import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Team = () => {
    return (
        <div>
            <div className="text-center mt-6">
                <h2 className="text-xl text-orange-500 font-bold mb-3">Team</h2>
                <h1 className="text-5xl font-bold mb-3">Meet Our Team</h1>
                <p className="w-1/2 mx-auto mb-10">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                <div className='text-center w-[314px] space-y-3'>
                    <img className='w-[314px] h-[293px] rounded-xl' src={team1} alt="" />
                    <p className='font-bold text-2xl'>Car Engine Plug</p>
                    <p>Engine Expert</p>
                    <div className='flex gap-4 justify-center'>
                        <FaFacebook/>
                        <FaInstagram />
                        <FaLinkedin/>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
                <div className='text-center w-[314px] space-y-3'>
                    <img className='w-[314px] h-[293px] rounded-xl' src={team2} alt="" />
                    <p className='font-bold text-2xl'>Car Engine Plug</p>
                    <p>Engine Expert</p>
                    <div className='flex gap-4 justify-center'>
                        <FaFacebook/>
                        <FaInstagram />
                        <FaLinkedin/>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
                <div className='text-center w-[314px] space-y-3'>
                    <img className='w-[314px] h-[293px] rounded-xl' src={team3} alt="" />
                    <p className='font-bold text-2xl'>Car Engine Plug</p>
                    <p>Engine Expert</p>
                    <div className='flex gap-4 justify-center'>
                        <FaFacebook/>
                        <FaInstagram />
                        <FaLinkedin/>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;