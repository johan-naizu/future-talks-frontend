"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import { useEffect, useState } from 'react';
import { Course } from '@/types';
import PageTemplate from '@/components/general/PageTemplate';
import CardContainer from '@/components/general/CardContainer';
import { useCourseContext } from '@/hooks/useCourseContext';
import { filter as fuzzyFilter } from 'fuzzy';

const Courses = () => {
    const { courses } = useCourseContext();
    const [searchText, setSearchText] = useState<string>("");
    const [filteredCourses, setFilteredCourses] = useState<{
        data: Course[]
    }>({
        data: []
    });

    useEffect(() => {
        const filteredData = fuzzyFilter(searchText, courses?.data || [], {
            extract: (course: Course) => course.attributes.name || '',
        }).map(item => item.original)
        setFilteredCourses({
            data: filteredData
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courses, searchText])

    return (
        <PageTemplate
            className="w-screen min-h-screen h-full relative"
        >
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Courses"
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <CardContainer
                type="course"
                courseData={filteredCourses}
                cols={3}
            />

        </PageTemplate>
    )
}

export default Courses;