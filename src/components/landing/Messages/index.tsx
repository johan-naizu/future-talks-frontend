"use client";

import { neueRegrade } from "@/fonts";
import Image from "next/image";
import Arrow from "/public/messages-arrow.svg";
import Bubbles from '/public/message-bubbles.png';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const Messages = () => {
    const router = useRouter();
    return (
        <div className={`w-screen h-screen relative flex items-center justify-center bg-primarycolor p-20 font-bold text-md md:text-lg xl:text-4xl ${neueRegrade.className}`}>
            <div className="w-full h-full flex flex-col items-center justify-center lg:grid grid-cols-7 grid-rows-2 gap-4">
                <div className="col-span-4 rounded-[30px] bg-white p-[10px] w-4/5 lg:w-full h-96 lg:h-full">
                    <div className="rounded-[20px] bg-[#02566C] w-full h-full text-white flex items-center justify-center">
                        Not sure <br />
                        Which course to take? <br />
                        Need help finding a college?
                    </div>
                </div>
                <motion.button
                    className="col-span-3 rounded-[30px] lg:rounded-br-none bg-white relative text-primarycolor flex items-center justify-center w-4/5 lg:w-full h-96 lg:h-full group"
                    animate={{
                        scale: 1
                    }}
                    whileHover={{
                        scale: 1.01
                    }}
                    whileTap={{
                        scale: 0.99
                    }}
                    onClick={() => router.push('/students')}
                >
                    Connect <br />
                    With students
                    <Image src={Arrow} alt="arrow" width={30} className="absolute bottom-4 right-4 group-hover:-rotate-180 transition" />
                </motion.button>
                <motion.button
                    className="col-span-3 rounded-[30px] lg:rounded-tl-none bg-white relative text-primarycolor flex items-center justify-center w-4/5 lg:w-full h-96 lg:h-full group"
                    animate={{
                        scale: 1
                    }}
                    whileHover={{
                        scale: 1.01
                    }}
                    whileTap={{
                        scale: 0.99
                    }}
                    onClick={() => router.push('/experts')}
                >
                    Connect <br />
                    With experts
                    <Image src={Arrow} alt="arrow" width={30} className="absolute bottom-4 right-4 group-hover:-rotate-180 transition" />
                </motion.button>
                <div className="col-span-4 rounded-[30px] bg-white p-[10px] w-4/5 lg:w-full h-96 lg:h-full">
                    <div className="rounded-[20px] bg-[#02566C] w-full h-full text-white flex items-center justify-center ">
                        Want to <br />
                        Get in touch with <br />
                        Professionals in your field?
                    </div>
                </div>
            </div>
            <Image src={Bubbles} alt="bubbles" width={50} className="absolute bottom-4 right-4" />
        </div>
    )
}

export default Messages;