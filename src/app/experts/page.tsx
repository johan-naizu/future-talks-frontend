// "use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import Card from "@/components/students/Card";
import { sourceCodePro } from "@/fonts";
import { getAllExperts } from '@/lib/experts';




const Experts = async () => {
    const experts = await getAllExperts();

    return (
        <div className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Experts"
            />


            <div className={`w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-24 2xl:px-36 ${sourceCodePro.className}`}>
                {
                    experts?.data.map(expert => (
                        <Card
                            key={expert.id}
                            {...expert}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Experts;