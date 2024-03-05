import Image from "next/image";
import MovingText from "./MovingText";
import checkeredBg from '/public/Gride.svg';
import Card from "./Card";
import { useScroll } from 'framer-motion';

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
            title: "Professionals",
            description: "Get in touch with working professionals",
            link: "#",
            image: "/imagePlaceholder.svg",
        }
    ]


    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <MovingText
                text="What we've got for you"
                scrollYProgress={scrollYProgress}
            />

            <div className="w-full h-full flex justify-center items-center gap-8">
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