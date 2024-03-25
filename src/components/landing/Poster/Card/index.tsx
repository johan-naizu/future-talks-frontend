import Image from "next/image";
import imagePlaceholder from '/public/imagePlaceholder.svg';
import Button from "@/components/general/Button";
import { motion } from "framer-motion";
import { neueRegrade } from "@/fonts";

//Todo: change hover animation
const Card = ({
    title,
    description,
    link,
    image,
}: {
    title: string,
    description: string,
    link: string,
    image: string
}) => {
    return (
        <motion.div
            className="w-80 h-96 rounded-xl bg-white shadow-2xl p-2"
        >
            <div className="w-full h-1/2 rounded-xl bg-neutral-300 flex items-center justify-center  overflow-hidden">
                <Image
                    src={image}
                    className="object-cover object-center rounded-xl bg-neutral-200 w-full"
                    alt="bg"
                    height={1000}
                    width={1000}
                />
            </div>
            <div className={`w-full h-1/2 p-2 ${neueRegrade.className}`}>
                <div className="w-full h-2/3 flex flex-col">
                    <span className="w-full font-bold text-2xl capitalize p-2"> {title} </span>
                    <span className="w-full text-md p-2 h-32 text-ellipsis overflow-hidden"> {description} </span>
                </div>
                <div className="h-1/3 flex items-end justify-center font-medium">
                    <Button
                        text="View Details"
                        rounded
                        onClick={() => 0}
                        href={link}

                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Card;