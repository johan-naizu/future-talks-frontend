import { poppins } from "@/fonts";
import { MotionValue, motion, useTransform } from "framer-motion";
const MovingText = ({
    text,
    scrollYProgress
}: {
    text: string,
    scrollYProgress: MotionValue<number>
}) => {
    const x = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"])
    return (
        <div className="bg-white w-[200dvw] h-16 border border-0 border-b-2 border-t-2 border-black flex justify-center items-center">
            <motion.div
                className={"text-primarycolor w-full font-medium lg:tracking-[2rem] text-lg lg:text-4xl text-center flex justify-center items-center" + poppins.className}
                style={{
                    x
                }}
            >
                {text}
            </motion.div>
        </div >
    )
}

export default MovingText;