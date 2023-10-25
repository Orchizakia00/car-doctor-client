import img1 from '../../../assets/icons/1.svg'
import img2 from '../../../assets/icons/2.svg'
import img3 from '../../../assets/icons/3.svg'

const Info = () => {
    return (
        <div className="bg-black h-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-10 rounded-xl my-20">
            <div className='flex items-center justify-center text-white gap-3'>
                <img src={img1} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='font-bold text-xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center justify-center text-white gap-3'>
                <img src={img2} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='font-bold text-xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center justify-center text-white gap-3'>
                <img src={img3} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='font-bold text-xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Info;