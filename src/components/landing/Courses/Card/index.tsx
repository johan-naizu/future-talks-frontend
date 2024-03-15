import Button from "@/components/general/Button";
import Image from "next/image";
import { poppins } from "@/fonts";
import { motion } from "framer-motion";

//Todo: change hover animation
const Card = ({
    title,
    link,
    image
}: {
    title: string,
    link: string,
    image: string,
}) => {
    return (
        <motion.div
            className={"h-full w-full p-10 flex flex-col relative gap-4 shadow-xl bg-white rounded-xl " + poppins.className}
        >
            <div className="w-full flex items-center justify-center gap-8">
                <Image src={image} alt="logo" width={50} height={50} />
                <span className="text-sm 2xl:text-2xl font-medium"> {title} </span>
            </div>
            <div className="">
                <Button
                    text="Learn More"
                    onClick={() => 1}
                    href={link}
                    invert
                />
            </div>
        </motion.div>
    )
}

export default Card;