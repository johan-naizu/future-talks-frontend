"use client";

import Image from "next/image";
import MovingText from "./MovingText";
import checkeredBg from '/public/Gride.svg';
import Card from "./Card";
import { useScroll } from 'framer-motion';


//TODO: TRY OUT SWIPABLE CARDS IN THE FUTURE
const Poster = () => {
    const { scrollYProgress } = useScroll({
    })

    const cardsData = [
        {
            title: "Courses",
            description: "Numerous courses offered at renowned universities",
            link: "#",
            image: "/imagePlaceholder.svg",
        },
        {
            title: "Students",
            description: "Get in touch with students from around the world",
            link: "#",
            image: "/imagePlaceholder.svg",
        },
        {
            title: "Experts",
            description: "Get in touch with working experts",
            link: "#",
            image: "/imagePlaceholder.svg",
        }
    ]


    return (
        <div className="w-screen h-full relative overflow-hidden">
            <MovingText
                text="What we've got for you"
                scrollYProgress={scrollYProgress}
            />

            <div className="w-full min-h-screen h-full py-5 lg:py-0 flex flex-col lg:flex-row justify-center items-center gap-8">
                {
                    cardsData.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                {...card}
                            />
                        )
                    })
                }
            </div>


            <Image
                src={checkeredBg}
                className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
                alt="bg"
                height={100}
                width={100}
            />
        </div>
    )
}

export default Poster;