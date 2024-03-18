import { neueRegrade } from "@/fonts";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import Filter from '/public/filter.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";

const Courses = () => {
    return (
        <div className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Courses"
            />

        </div>
    )
}

export default Courses;