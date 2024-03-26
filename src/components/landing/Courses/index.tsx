import { neueRegrade } from "@/fonts";
import Card from "./Card";
import { useMemo } from "react";
import { getAllCourses } from "@/lib/course";

const Courses = async () => {
    const courses = await getAllCourses();

    return (
        <div className={`w-screen flex flex-col min-h-screen h-full bg-[#f5f5f5] ${neueRegrade.className}`}>
            <h1 className="text-3xl font-extrabold p-4 w-full text-center mt-4"> Trending Courses </h1>
            <div className="h-full w-full p-4 md:p-32 2xl:px-48 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 items-center justify-center gap-4 md:gap-16">
                {
                    courses?.data.map((course, index) => (
                        <div key={index} className="w-full h-full flex items-center justify-center px-4 py-2 md:p-0">
                            <Card
                                title={course.attributes.name}
                                link={`/courses/${course.id}`}
                                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${course.attributes.logo?.data.attributes.url}` || ""}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;