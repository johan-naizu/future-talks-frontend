import Image from "next/image";
import Waves from '/public/waves.svg';
import Hello from '/public/hello.svg';
import EduGirl from '/public/girlOnBook.svg';
import Book from '/public/book.svg';
import Info from '/public/info.svg';
import { neueRegrade } from "@/fonts";

const Hero = () => {
    return (
        <div className="w-screen h-screen relative flex items-center justify-center">
            <div>
                <Image src={Waves} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
                <div className="absolute bottom-0 right-0 flex items-end">
                    <Image src={EduGirl} alt="edu-girl" className="hidden xl:block w-[350px] 2xl:w-[400px]" width={400} height={400} />
                    <div>
                        <Image src={Hello} alt="hello" className="w-[200px] sm:w-[300px] md:w-[400px] 2xl:w-[500px]" width={500} />
                        <Image src={Book} alt="book" className="w-[200px] sm:w-[300px] md:w-[400px] 2xl:w-[500px]" width={500} />
                    </div>
                </div>
                <Image src={Info} alt="info" className="absolute bottom-0 left-0 w-[150px] sm:w-[200px] md:w-[250px]" />
            </div>

            <h1 className={`text-[3rem] md:text-[4rem] xl:text-[6rem] ${neueRegrade.className} font-regular text-black italic relative text-center sm:text-left sm:p-10 w-full`}>
                SHAPING THE
                <br />
                <span className="font-semibold"> FUTURE </span>
            </h1>
        </div >
    )
}

export default Hero;