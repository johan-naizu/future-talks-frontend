"use client";

import Image from "next/image";
import Waves from '/public/waves.svg';
import Hello from '/public/hello.svg';
import EduGirl from '/public/girlOnBook.svg';
import Book from '/public/book.svg';
import Info from '/public/info.svg';
import { neueRegrade, helveticaBold, helveticaRegular } from "@/fonts";
import Grid from '/public/Gride.svg';
import Bg from '/public/bg.svg';
import TextRing from '/public/text-ring.png';

const Hero = () => {
    return (
        <div className="w-screen h-screen relative lg:flex items-center justify-center">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-40 -z-10" />
            <div className="w-full h-full absolute top-0 left-0 lg:static -z-10 lg:z-0">
                <Image src={Bg} alt="bg" width={1000} height={1000} className="object-cover w-full h-full" />
            </div>

            <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                <h1 className={"text-white lg:text-[#02566C] text-[4rem] lg:text-[6rem] text-center " + helveticaRegular.className}>
                    THE
                    <span className={helveticaBold.className}> FUTURE </span>  <br />
                    IS
                    <span className={helveticaBold.className + " italic"}> YOURS </span>
                </h1>

                <Image src={TextRing} alt="text-ring" width={250} height={250} className="hidden lg:block" />
            </div>
        </div>
        // <div className="w-screen h-screen relative flex items-center justify-center">
        //     <div>
        //         <Image src={Waves} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
        //         <div className="absolute bottom-0 right-0 flex items-end">
        //             <Image src={EduGirl} alt="edu-girl" className="hidden xl:block w-[350px] 2xl:w-[400px]" width={400} height={400} />
        //             <div>
        //                 <Image src={Hello} alt="hello" className="w-[200px] sm:w-[300px] md:w-[400px] 2xl:w-[500px]" width={500} />
        //                 <Image src={Book} alt="book" className="w-[200px] sm:w-[300px] md:w-[400px] 2xl:w-[500px]" width={500} />
        //             </div>
        //         </div>
        //         <Image src={Info} alt="info" className="absolute bottom-0 left-0 w-[150px] sm:w-[200px] md:w-[250px]" />
        //     </div>

        //     <h1 className={`text-[3rem] md:text-[4rem] xl:text-[6rem] ${neueRegrade.className} font-regular text-black italic relative text-center sm:text-left sm:p-10 w-full`}>
        //         SHAPING THE
        //         <br />
        //         <span className="font-semibold"> FUTURE </span>
        //     </h1>
        // </div >
    )
}

export default Hero;