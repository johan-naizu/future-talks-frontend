"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import Card from "@/components/students/Card";
import { sourceCodePro } from "@/fonts";
import { getAllStudents } from '@/lib/students';
import { useEffect, useState } from 'react';
import { getAllCourses } from '@/lib/course';
import { Student } from '@/types';
import PageTemplate from '@/components/general/PageTemplate';
import { filter as fuzzyFilter } from 'fuzzy';
import CardContainer from '@/components/general/CardContainer';




const Students = () => {
    const [students, setStudents] = useState<{ data: Student[] } | undefined>(undefined);
    const [courses, setCourses] = useState<{
        label: string,
        value: string | null
    }[]>([]);
    const [current, setCurrent] = useState<string | null>(null)
    const [filteredStudents, setFilteredStudents] = useState<{ data: Student[] }>({
        data: [],
    });
    const [searchText, setSearchText] = useState<string>("");


    useEffect(() => {
        const getData = async () => {
            const studentsData = await getAllStudents();
            setStudents(studentsData);
            setFilteredStudents({ data: studentsData?.data || [] })
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
        let filteredData: Set<Student>;
        if (current === null) {
            filteredData = new Set([
                ...fuzzyFilter(searchText, students?.data || [], {
                    extract: (student: Student) => student.attributes.name || '',
                }).map(item => item.original),
                ...fuzzyFilter(searchText, students?.data || [], {
                    extract: (student: Student) => student.attributes.courses?.data[0].attributes.name || '',
                }).map(item => item.original)
            ])
        }
        else {
            filteredData = new Set([
                ...fuzzyFilter(searchText, students?.data.filter(student => student.attributes.courses?.data.some(element => element.id === current)) || [], {
                    extract: (student: Student) => student.attributes.name || '',
                }).map(item => item.original),
                ...fuzzyFilter(searchText, students?.data.filter(student => student.attributes.courses?.data.some(element => element.id === current)) || [], {
                    extract: (student: Student) => student.attributes.courses?.data[0].attributes.name || '',
                }).map(item => item.original)
            ])
        }
        setFilteredStudents({
            data: Array.from(filteredData.values())
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, searchText])

    return (
        <PageTemplate className="w-screen min-h-screen h-full relative">
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Students"
                filterData={courses}
                setSelctedFilter={setCurrent}
                searchText={searchText}
                setSearchText={setSearchText}
            />


            <CardContainer
                type="student"
                studentData={filteredStudents}
                cols={2}
            />

        </PageTemplate>
    )
}

export default Students;