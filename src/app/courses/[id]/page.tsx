"use client";

import { useParams } from "next/navigation"
import PageTemplate from "@/components/general/PageTemplate";
import Image from 'next/image';
import Grid from '/public/Gride.svg';

const CourseSlugPage = () => {
    const params: {
        id: string
    } = useParams()

    return (
        <PageTemplate
            className="w-screen h-screen flex items-center justify-center relative"
        >
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            {params.id}
        </PageTemplate>
    )
}

export default CourseSlugPage