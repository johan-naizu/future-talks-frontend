import { neueRegrade } from "@/fonts";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';

const Courses = () => {
    return (
        <div className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <div className={`${neueRegrade.className} pt-24 h-[70dvh] flex flex-col  items-center justify-center`}>
                <div className="flex items-center justify-center gap-4 h-36 gap-24 ">
                    <div className="relative self-start">
                        <Image src={Blur} alt="blur1" width={100} className="" />
                        <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -top-4 -right-4" />
                    </div>

                    <h1 className="text-4xl md:text-[8rem] text-center font-bold">Courses</h1>

                    <div className="relative self-end">
                        <Image src={Blur} alt="blur1" width={100} className="" />
                        <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -bottom-4 -left-4" />
                    </div>
                </div>

                {/* <input /> */}
            </div>

        </div>
    )
}

export default Courses;