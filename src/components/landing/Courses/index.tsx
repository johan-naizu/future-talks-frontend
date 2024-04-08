import { neueRegrade } from "@/fonts";
import Card from "./Card";
import { getTrendingCourses } from "@/lib/course";

const Courses = async () => {
    const courses = await getTrendingCourses()
    return (
        <div className={`w-screen flex flex-col h-full bg-[#f5f5f5] ${neueRegrade.className}`}>
            <h1 className="text-3xl font-extrabold p-4 w-full text-center mt-4"> Trending Courses </h1>
            <div className="h-full w-full p-4 md:p-32 2xl:px-48 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4 md:gap-16">
                {
                    courses?.data.map((course, index) => (
                        <div key={index} className="w-full h-full flex items-center justify-center px-4 py-2 md:p-0">
                            <Card
                                title={course.attributes.name}
                                link={`/courses/${course.id}`}
                                image={course.attributes.logo ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${course.attributes.logo?.data.attributes.url}` : "/nursing.svg"}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;