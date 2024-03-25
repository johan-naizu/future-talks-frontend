"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import { sourceCodePro } from '@/fonts';
import { useEffect, useMemo, useState } from 'react';
import { Course, CourseType, GraduationType } from '@/types';
import Card from '@/components/course/card';
import PageTemplate from '@/components/general/PageTemplate';
import { getAllCourses } from '@/lib/course';

const Courses = () => {
    const [courses, setCourses] = useState<{
        data: Course[],
    }>({ data: [] });

    useEffect(() => {
        const getData = async () => {
            const coursesData = await getAllCourses();
            if (coursesData)
                setCourses(coursesData);
            else
                setCourses({ data: [] });
        }

        getData();
    }, []);

    return (
        <PageTemplate
            className="w-screen min-h-screen h-full relative"
        >
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Courses"
                filterData={[]}
                selectedFilter={null}
                setSelctedFilter={() => { }}

            />

            <div className={`w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-24 2xl:px-36 ${sourceCodePro.className}`}>
                {
                    courses.data.map((course) => {
                        return (
                            <Card
                                key={course.id}
                                {...course}
                            />
                        )
                    })
                }
            </div>

        </PageTemplate>
    )
}

export default Courses;