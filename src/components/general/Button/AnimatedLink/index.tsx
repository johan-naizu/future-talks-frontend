import { Dispatch, SetStateAction, useState } from "react";
import AnimatedText from "../AnimatedText";



const AnimatedLink = ({ title, href, hover, invert }: { title: string, href?: string, hover: boolean, invert: boolean }) => {
    return (
        <a
            className="relative cursor-pointer overflow-hidden font-inherit block"
            href={href}
            target="_blank"
        >
            <AnimatedText title={title} top={true} hovered={hover} invert={invert} />
            <div className="absolute top-0">
                <AnimatedText title={title} top={false} hovered={hover} invert={invert} />
            </div>
        </a>
    )
}

export default AnimatedLink;