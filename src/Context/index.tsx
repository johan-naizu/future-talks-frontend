"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getAllCourses } from "@/lib/course";
import { Course } from "@/types";

export const CourseContext = createContext<{
    courses: { data: Course[] } | undefined
} | undefined>(undefined);

export const CourseContextProvider = ({
    children
}: {
    children: ReactNode
}) => {
    const [courses, setCourses] = useState<{ data: Course[] } | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const coursesData = await getAllCourses();
            setCourses(coursesData);
        }

        getData();
    }, [])

    return (
        <CourseContext.Provider value={{
            courses
        }}>
            {children}
        </CourseContext.Provider>
    )
}




