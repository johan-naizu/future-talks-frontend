import { neueRegrade, sourceCodePro } from "@/fonts";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import Filter from '/public/filter.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import Card from "@/components/students/Card";
import { getAllStudents } from "@/lib/students";

const Students = async () => {
    const students = await getAllStudents();
    return (
        <div className="w-sreen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Students"
            />
            <div className={`w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-24 2xl:px-36 ${sourceCodePro.className}`}>
                {
                    students?.data.map(student => {
                        return (
                            <Card
                                key={student.id}
                                {...student}
                            />
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Students;