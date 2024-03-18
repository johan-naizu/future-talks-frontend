import { neueRegrade, sourceCodePro } from "@/fonts";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import Filter from '/public/filter.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import Card from "@/components/students/Card";

const Students = () => {
    return (
        <div className="w-sreen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Students"
            />
            <div className={`w-full h-full mt-16 grid grid-cols-2 gap-x-16 gap-y-32 py-16 px-36 ${sourceCodePro.className}`}>
                <Card
                    name="John Doe"
                    course="B.Tech in Electrical and Electronics"
                    remarks="Please add your content here. Keep it short and simple. And smile :)"
                    contact="+91 23456789"
                    email="john@doe.com"
                />

                <Card
                    name="John Doe"
                    course="BSIT"
                    remarks="Good"
                    contact="+91 23456789"
                    email="john@doe.com"
                />
                <Card
                    name="John Doe"
                    course="BSIT"
                    remarks="Good"
                    contact="+91 23456789"
                    email="john@doe.com"
                />

                <Card
                    name="John Doe"
                    course="BSIT"
                    remarks="Good"
                    contact="+91 23456789"
                    email="john@doe.com"
                />

                <Card
                    name="John Doe"
                    course="BSIT"
                    remarks="Good"
                    contact="+91 23456789"
                    email="john@doe.com"
                />

            </div>

        </div>
    )
}

export default Students;