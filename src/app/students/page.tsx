import { neueRegrade } from "@/fonts";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import Filter from '/public/filter.svg';
import 'font-awesome/css/font-awesome.min.css';

const Students = () => {
    return (
        <div className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <div className={`${neueRegrade.className} pt-24 h-[70dvh] flex flex-col  items-center justify-center relative`}>
                <div className="flex items-center justify-center gap-4 h-18 md:h-36 gap-24 ">
                    <div className="relative self-start">
                        <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                        <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -top-1 -right-1 w-4 md:-top-2 md:-right-2 md:w-8" />
                    </div>

                    <h1 className="text-4xl md:text-[8rem] text-center font-bold italic">Students</h1>

                    <div className="relative self-end">
                        <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                        <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -bottom-1 -left-1 w-4 md:w-8 md:-bottom-2 md:-left-1" />
                    </div>
                </div>

                <div className="border border-primarycolor md:absolute w-1/2 md:w-96 py-1 px-2 rounded-md bottom-0 left-12 bg-white flex items-center justify-center">
                    <input
                        className="border-0 font-[FontAwesome] p-1 px-2 rounded-md w-full h-full bg-transparent text-primarycolor focus:outline-none"
                        placeholder="&#xF002; Search ..."
                    />
                    <div className="h-12 rounded-md flex items-center justify-center">
                        <Image src={Filter} alt="filter" width={50} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Students;