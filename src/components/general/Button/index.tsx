"use client";

import Image from "next/image";
import AnimatedLink from "./AnimatedLink";
import { useState } from "react";
import { poppins } from "@/fonts";
import { motion } from "framer-motion";

const Button = ({
    text,
    rounded,
    onClick,
    href,
    invert,
}: {
    text: string,
    rounded?: boolean,
    onClick?: () => void,
    href?: string
    icon?: string,
    invert?: boolean,
}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className={`w-full ${poppins.className}`}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <motion.button
                onClick={onClick}
                className={`w-full py-3 px-8 font-regular ${rounded ? "rounded-full" : "rounded-md"} ${invert ? "border border-primarycolor border-1 bg-white text-primarycolor" : "border border-primarycolor border-1 bg-primarycolor text-white"}`}
                whileHover={{
                    backgroundColor: invert ? "#47706B" : "#fff",
                }}
            >
                <AnimatedLink title={text} href={href ? href : undefined} hover={hover} invert={invert ? true : false} />
            </motion.button>
        </div>
    )
}

export default Button;