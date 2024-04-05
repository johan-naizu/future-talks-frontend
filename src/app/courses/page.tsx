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
import { useCourseContext } from '@/hooks/useCourseContext';
import { filter as fuzzyFilter } from 'fuzzy';

const Courses = () => {
    const { courses: data } = useCourseContext();
    const [courses, setCourses] = useState<{
        data: Course[],
    }>(data || { data: [] });
    const [searchText, setSearchText] = useState<string>("");
    const [current, setCurrent] = useState<string | null>(null)
    const [coursesFilter, setCoursesFilter] = useState<{
        label: string,
        value: string | null
    }[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<{
        data: Course[]
    }>({
        data: []
    });
    useEffect(() => {
        if (data) {
            setCourses(data);
        }
    }, [data])

    useEffect(() => {
        let filteredData: Set<Course>;
        if (current === null) {
            filteredData = new Set([
                ...fuzzyFilter(searchText, courses?.data || [], {
                    extract: (course: Course) => course.attributes.name || '',
                }).map(item => item.original),
                ...fuzzyFilter(searchText, courses?.data || [], {
                    extract: (course: Course) => course.attributes.courseType || '',
                }).map(item => item.original)
            ])
        }
        else {
            //filter with gradtype
            filteredData = new Set(courses?.data);
        }
        setFilteredCourses({
            data: Array.from(filteredData.values())
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, searchText])

    return (
        <PageTemplate
            className="w-screen min-h-screen h-full relative"
        >
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Courses"
                filterData={[]}
                setSelctedFilter={setCurrent}
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