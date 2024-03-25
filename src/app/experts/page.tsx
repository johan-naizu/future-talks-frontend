"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import Card from "@/components/students/Card";
import { sourceCodePro } from "@/fonts";
import { getAllExperts } from '@/lib/experts';
import { useEffect, useState } from 'react';
import { getAllCourses } from '@/lib/course';
import { Professional } from '@/types';
import PageTemplate from '@/components/general/PageTemplate';




const Experts = () => {
    const [experts, setExperts] = useState<{ data: Professional[] } | undefined>(undefined);
    const [courses, setCourses] = useState<{
        label: string,
        value: string | null
    }[]>([]);
    const [current, setCurrent] = useState<string | null>(null)
    const [filteredExperts, setFilteredExperts] = useState<{ data: Professional[] }>({
        data: [],
    });


    useEffect(() => {
        const getData = async () => {
            const expertsData = await getAllExperts();
            setExperts(expertsData);
            setFilteredExperts({ data: expertsData?.data || [] })
            const coursesData = await getAllCourses();
            setCourses(
                [
                    { label: "All", value: null },
                    ...(coursesData?.data.map(course => {
                        return {
                            label: course.attributes.name,
                            value: course.id
                        }
                    }) || [])
                ]
            )
        }

        getData();
    }, []);

    useEffect(() => {
        if (current === null)
            setFilteredExperts({
                data: experts?.data || []
            })
        else {
            setFilteredExperts({
                data: experts?.data.filter(expert => expert.attributes.courses?.data.some(element => element.id === current)) || []
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    return (
        <PageTemplate className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Experts"
                filterData={courses}
                selectedFilter={current}
                setSelctedFilter={setCurrent}

            />


            <div className={`w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-24 2xl:px-36 ${sourceCodePro.className}`}>
                {
                    filteredExperts?.data.map(expert => (
                        <Card
                            key={expert.id}
                            {...expert}
                        />
                    ))
                }
            </div>

        </PageTemplate>
    )
}

export default Experts;