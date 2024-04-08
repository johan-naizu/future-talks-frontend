import StudentCard from "@/components/students/Card";
import UniversityCard from '@/components/universities/Card';
import CourseCard from "@/components/course/Card";
import { sourceCodePro } from "@/fonts"
import { Course, Professional, Student, University } from "@/types";


const CardContainer = ({
    className,
    courseData,
    studentData,
    universityData,
    type,
    cols
}: {
    className?: string,
    courseData?: {
        data: Course[]
    },
    studentData?: {
        data: (Professional | Student)[]
    },
    universityData?: {
        data: University[]
    }
    type: "professional" | "course" | "student" | "university",
    cols: number,
}) => {
    return (
        <>
            {
                !courseData?.data.length && !studentData?.data.length && !universityData?.data.length ? (
                    <div className="w-full h-full mt-16 p-4 flex items-center justify-center lg:py-16 lg:px-2 xl:px-12 2xl:px-36">
                        <span className="text-lg font-medium text-gray-400 border border-2 border-neutral-800 px-10 py-4 border-dashed">No data available</span>
                    </div>
                ) : (
                    <div className={`${className ? className : ""} w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-${cols} lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-12 2xl:px-36 ${sourceCodePro.className}`}>
                        {
                            type === "university" ? (
                                universityData?.data.map(university => (
                                    <UniversityCard
                                        key={university.id}
                                        {...university}
                                    />
                                ))
                            ) : (
                                type === "course" ? (
                                    courseData?.data.map(course => (
                                        <CourseCard
                                            key={course.id}
                                            {...course}
                                        />
                                    ))
                                ) : (
                                    studentData?.data.map(student => (
                                        <StudentCard
                                            key={student.id}
                                            {...student}
                                        />
                                    ))
                                )
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default CardContainer;