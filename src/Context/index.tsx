"use client"

import { createContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from "react";
import { getAllCourses } from "@/lib/course";
import { Course, University } from "@/types";
import { getAllUniversities } from "@/lib/university";

export const CourseContext = createContext<{
    courses?: { data: Course[] }
    universities?: { data: University[] }
    canShowPopup: boolean
    setCanShowPopup: Dispatch<SetStateAction<boolean>>
} | undefined>(undefined);

export const CourseContextProvider = ({
    children
}: {
    children: ReactNode
}) => {
    const [courses, setCourses] = useState<{ data: Course[] } | undefined>(undefined);
    const [universities, setUniversities] = useState<{ data: University[] } | undefined>(undefined);
    const [canShowPopup, setCanShowPopup] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const coursesData = await getAllCourses();
            const universitiesData = await getAllUniversities();
            setCourses(coursesData);
            setUniversities(universitiesData);
        }

        getData();
    }, [])

    return (
        <CourseContext.Provider value={{
            courses,
            universities,
            canShowPopup,
            setCanShowPopup
        }}>
            {children}
        </CourseContext.Provider>
    )
}




