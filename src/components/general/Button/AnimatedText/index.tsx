import { motion } from "framer-motion";
import { useMemo } from "react";


const AnimatedText = ({
    title,
    top,
    hovered,
    invert,
}: {
    title: string,
    top: boolean,
    hovered: boolean,
    invert?: boolean,
}) => {

    const textAnimation = useMemo(() => ({
        topTextAnimation: {
            rest: {
                y: 0,
                color: invert ? "#47706B" : "#fff",
            },
            hover: {
                y: "-110%",
                transition: {
                    duration: 0.3,
                    ease: [0.6, 0.01, 0.05, 0.95]
                },
                type: "tween",
            }
        },
        bottomTextAnimation: {
            rest: {
                y: "110%",
            },
            hover: {
                y: 0,
                color: invert ? "#fff" : "#47706B",
                transition: {
                    duration: 0.3,
                    ease: [0.6, 0.01, 0.05, 0.95]
                },
                type: "tween",
            }
        }
    }), [invert]);

    return (
        <motion.span
            initial="rest"
            animate={hovered ? "hover" : "rest"}
            transition={{
                staggerChildren: 0.01,
            }}
        >
            {
                title.split("").map((char, index) => {
                    return (char === " ") ? (
                        <span key={index}>&nbsp;</span>
                    ) : (
                        <motion.span
                            key={index}
                            className="relative inline-block whitespace-nowrap text-inherit font-inherit"
                            variants={top ? textAnimation.topTextAnimation : textAnimation.bottomTextAnimation}
                        >
                            {char}
                        </motion.span>
                    )
                })
            }
        </motion.span>
    )
}

export default AnimatedText;