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
        <div className={`w-screen h-screen relative flex items-center justify-center bg-primarycolor p-4 lg:p-20 font-bold text-md md:text-3xl xl:text-4xl ${neueRegrade.className}`}>
            <div className="w-full h-full items-center justify-center grid grid-cols-4 lg:grid-cols-7 grid-rows-8 lg:grid-rows-2 gap-4">
                <div className="col-span-4 row-span-3 lg:row-span-1 rounded-[30px] bg-white p-[10px] w-full h-full">
                    <div className="rounded-[20px] bg-[#02566C] w-full h-full text-white flex items-center justify-center">
                        Not sure <br />
                        Which course to take? <br />
                        Need help finding a college?
                    </div>
                </div>
                <motion.button
                    className="col-span-2 lg:col-span-3 row-span-2 lg:row-span-1  rounded-[30px] rounded-br-none bg-white relative text-primarycolor flex items-center justify-center w-full h-full group"
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
                    <Image src={Arrow} alt="arrow" width={30} className="w-4 lg:w-8 absolute bottom-4 right-4 group-hover:-rotate-180 transition" />
                </motion.button>
                <motion.button
                    className="col-span-2 lg:col-span-3 row-span-2 lg:row-span-1 rounded-[30px] rounded-tl-none bg-white relative text-primarycolor flex items-center justify-center w-full h-full group"
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
                    <Image src={Arrow} alt="arrow" width={30} className="w-4 lg:w-8 absolute bottom-4 right-4 group-hover:-rotate-180 transition" />
                </motion.button>
                <div className="col-span-4 row-span-3 lg:row-span-1 rounded-[30px] bg-white p-[10px] w-full h-full">
                    <div className="rounded-[20px] bg-[#02566C] w-full h-full text-white flex items-center justify-center ">
                        Want to <br />
                        Get in touch with <br />
                        Professionals in your field?
                    </div>
                </div>
            </div>
            <Image src={Bubbles} alt="bubbles" width={50} className="absolute bottom-4 right-4 -z-10" />
        </div>
    )
}

export default Messages;