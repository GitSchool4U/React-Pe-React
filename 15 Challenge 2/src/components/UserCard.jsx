import { FaYoutube } from "react-icons/fa";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

const UserCard = ({title, role, likeCount, imgUrl}) => {
    
    return (
        <div className='w-full rounded-xl overflow-hidden shadow-2xl'>

            {/* top part */}
            <div className='relative w-full aspect-video bg-blue-400'>
                <img className='absolute h-full aspect-square object-cover object-top rounded-full left-1/2 -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white' src={imgUrl} alt="error loading image"/>
            </div>


            {/* bottom part */}
            <div className='flex flex-col items-center pt-[5rem] pb-[3rem]'>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="my-2">{role}</p>
                <div className="flex gap-[1rem]">
                    <FaYoutube className="bg-red-400 p-2 text-white text-4xl rounded-full" />
                    <FaYoutube className="bg-red-400 p-2 text-white text-4xl rounded-full" />
                    <FaYoutube className="bg-red-400 p-2 text-white text-4xl rounded-full" />
                    <FaYoutube className="bg-red-400 p-2 text-white text-4xl rounded-full" />
                </div>

                <div className="flex gap-[2rem] my-[2rem]">
                    <Button text="Subscribe" />
                    <Button text="Message" />
                </div>

                <div className="flex items-center gap-[1rem]">
                    <div className="flex items-center text-xl">
                        <CiHeart />
                        <span>{likeCount}</span>
                    </div>
                    <Line/>
                    <div className="flex items-center text-xl">
                        <CiHeart />
                        <span>{likeCount}</span>
                    </div>
                    <Line/>
                    <div className="flex items-center text-xl">
                        <CiHeart />
                        <span>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Line = () => {
  return (
    <div className="w-[1px] h-[1.6rem] bg-black/20"></div>
  )
}

export default UserCard