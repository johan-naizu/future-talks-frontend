"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import { sourceCodePro } from '@/fonts';
import { useEffect, useMemo, useState } from 'react';
import { Course, CourseType, GraduationType } from '@/types';
import Card from '@/components/course/Card';
import PageTemplate from '@/components/general/PageTemplate';
import { getAllCourses } from '@/lib/course';
import CardContainer from '@/components/general/CardContainer';

const Courses = () => {
    const [courses, setCourses] = useState<{
        data: Course[],
    }>({ data: [] });
    const [searchText, setSearchText] = useState<string>("");

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
                setSelctedFilter={() => { }}
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <CardContainer
                type="course"
                courseData={courses}
                cols={3}
            />

        </PageTemplate>
    )
}

export default Courses;