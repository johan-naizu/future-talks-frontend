import { neueRegrade } from "@/fonts";
import Card from "./Card";
import { useMemo } from "react";

const Courses = () => {

    const coursesData = useMemo(() => [
        {
            title: "Design",
            image: "/design.svg",
            link: "#"
        },
        {
            title: "Engineering",
            image: "/engineering.svg",
            link: "#",
        },
        {
            title: "AI and ML",
            image: "/aiandml.svg",
            link: "#",
        },
        {
            title: "Nursing",
            image: "/nursing.svg",
            link: "#",
        },
        {
            title: "Journalism",
            image: "/journalism.svg",
            link: "#",
        },
        {
            title: "Aviation",
            image: "/aviation.svg",
            link: "#",
        }
    ], []);


    return (
        <div className={`w-screen flex flex-col min-h-screen h-full bg-[#f5f5f5] ${neueRegrade.className}`}>
            <h1 className="text-3xl font-extrabold p-4 w-full text-center mt-4"> Trending Courses </h1>
            <div className="h-full w-full p-4 md:p-32 2xl:px-48 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 items-center justify-center gap-16">
                {
                    coursesData.map((course, index) => (
                        <div key={index} className="w-full h-full flex items-center justify-center">
                            <Card
                                {...course}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;