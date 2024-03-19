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
    const textArray = text.split(" ");
    return (
        <>
            <div className="w-full h-16 flex justify-center items-center hidden lg:block">
                <motion.div
                    className={"text-white w-full font-bold h-full lg:tracking-[2rem] text-lg lg:text-4xl text-center flex justify-center items-center gap-10 " + poppins.className}
                    style={{
                        x
                    }}
                >
                    {
                        textArray.map((word, index) => (
                            <span
                                key={index}
                            >
                                {word + " "}
                            </span>
                        ))
                    }
                </motion.div>
            </div >
            <div className="w-full tracking-[0.5rem] h-16 flex justify-center items-center lg:hidden">
                <div className={"text-primarycolor w-full font-medium text-lg text-center flex justify-between items-center " + poppins.className}>
                    {
                        textArray.map((word, index) => (
                            <span
                                key={index}
                            >
                                {word}
                            </span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovingText;