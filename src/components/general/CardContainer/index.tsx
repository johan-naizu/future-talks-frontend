import StudentCard from "@/components/students/Card";
import CourseCard from "@/components/course/Card";
import { sourceCodePro } from "@/fonts"
import { Course, Professional, Student } from "@/types";


const CardContainer = ({
    className,
    courseData,
    studentData,
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
    type: "professional" | "course" | "student",
    cols: number,
}) => {
    return (
        <div className={`${className ? className : ""} w-full h-full mt-16 p-4 flex flex-col gap-4 lg:grid lg:grid-cols-${cols} lg:gap-x-8 xl:gap-x-16 lg:gap-y-8 xl:gap-y-32 lg:py-16 lg:px-2 xl:px-12 2xl:px-36 ${sourceCodePro.className}`}>
            {
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
            }
        </div>
    )
}

export default CardContainer;