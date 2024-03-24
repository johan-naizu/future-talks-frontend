"use client";
import Button from "@/components/general/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({
    id,
    attributes,
}: Student | Professional) => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        setImages(attributes.pfp.data.map((image) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`));
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    return (
        <>
            {
                !show && (
                    <motion.div
                        className="w-full bg-white shadow-2xl shadow-primarycolor/40 border border-primarycolor h-full lg:h-72 rounded-3xl p-8 font-inherit flex flex-col relative"
                        layoutId={`student-card-${id}`}
                        onClick={() => setShow(true)}
                    >
                        <div className="flex w-full gap-4 items-center">
                            <motion.img
                                src={images[0]}
                                alt="profile"
                                layoutId={`student-card-${id}-image`}
                                className="object-cover rounded-full w-12 h-12 outline"
                                style={{
                                    clipPath: 'circle(50% at 50% 50%)',
                                }}
                                width={100}
                                height={100}
                            />
                            <motion.div
                                className="flex flex-col w-full"
                                layoutId={`student-card-${id}-header`}>
                                <span className="font-medium text-lg">{attributes.name}</span>
                                <span className="font-regular text-neutral-500">{attributes.courses?.data[0].attributes.name || "N/A"}</span>
                            </motion.div>
                        </div>
                        <motion.div
                            className="flex flex-col w-full justify-between mt-4 h-24"
                            layoutId={`student-card-${id}-content`}
                        >
                            <span className="font-medium text-lg">Remarks</span>
                            <span className="font-regular text-neutral-500 h-20 overflow-hidden text-ellipsis">{attributes.remarks}</span>
                        </motion.div>

                        <motion.div
                            className="w-full mt-4 lg:mt-0 lg:absolute left-0 bottom-8 flex flex-col lg:flex-row lg:px-8 gap-4"
                            layoutId={`student-card-${id}-footer`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full lg:w-5/12 xl:w-1/3 text-[0.7rem]">
                                <Button
                                    text={`+91 ${attributes.phoneNumber}` || "No contact"}
                                    rounded
                                    invert
                                    href={`tel:+91 ${attributes.phoneNumber}`}
                                />
                            </div>
                            <div className="w-full lg:w-7/12 xl:w-2/3 text-[0.7rem]">
                                <Button
                                    text={attributes.email || "No email"}
                                    rounded
                                    href={`mailto:${attributes.email}`}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }

            {
                show && (
                    <div
                        className="w-screen h-screen bg-black/20 fixed top-0 left-0 z-[10000000] flex items-center justify-center p-8 md:p-16 lg:p-48 backdrop-blur-sm"
                        onClick={() => setShow(false)}
                    >
                        <motion.div
                            className={`w-full bg-transparent h-full lg:h-96 rounded-3xl font-inherit flex flex-col overflow-hidden lg:flex-row relative gap-8`}
                            layoutId={`student-card-${id}`}
                        >

                            <span className="bg-black lg:bg-transparent absolute top-2 right-2 rounded-full lg:top-8 lg:right-8 z-[10000000000]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white lg:text-black p-2 lg:p-1 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={() => setShow(false)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                            <div className={"w-full bg-white h-full lg:h-96 rounded-3xl font-inherit flex flex-col overflow-hidden lg:flex-row relative gap-8"}>
                                <div className="h-1/3 lg:h-full lg:w-1/3 relative overflow-hidden">
                                    <AnimatePresence>
                                        <motion.img
                                            className="w-full h-full object-cover"
                                            src={images[current]}
                                            // layoutId={`student-card-${id}-image`}
                                            alt="profile"
                                            key={current}
                                            initial={{ position: "absolute", x: "100%" }}
                                            animate={{ position: "relative", x: "0%" }}
                                            exit={{ position: "absolute", x: "-100%" }}
                                            transition={{
                                                duration: 0.5,
                                                type: "tween",
                                            }}
                                        />
                                    </AnimatePresence>
                                </div>
                                <div className="w-full relative p-8 h-2/3 lg:h-full">
                                    <motion.div
                                        className="flex w-full flex-col"
                                        layoutId={`student-card-${id}-header`}
                                    >
                                        <span className="font-medium text-lg">{attributes.name}</span>
                                        <span className="font-regular text-neutral-500">{attributes.courses?.data[0].attributes.name || "N/A"}</span>
                                    </motion.div>

                                    <hr className="text-white" />

                                    <motion.div
                                        className="flex flex-col w-full mt-8 h-1/2 lg:h-36"
                                        layoutId={`student-card-${id}-content`}
                                    >
                                        <span className="font-medium text-lg">Remarks</span>
                                        <span className="font-regular text-neutral-500 h-full overflow-scroll">{attributes.remarks}</span>
                                    </motion.div>

                                    <motion.div
                                        className="px-8 w-full mt-4 lg:mt-0 absolute left-0 bottom-8 flex flex-col lg:flex-row lg:px-8 gap-4"
                                        layoutId={`student-card-${id}-footer`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="w-full lg:w-5/12 xl:w-1/3 text-xs"
                                        >
                                            <Button
                                                text={`+91 ${attributes.phoneNumber}` || "No contact"}
                                                rounded
                                                invert
                                                href={`tel:+91 ${attributes.phoneNumber}`}
                                            />
                                        </div>
                                        <div className="w-full lg:w-7/12 xl:w-2/3 text-xs"
                                        >
                                            <Button
                                                text={attributes.email || "No email"}
                                                rounded
                                                href={`mailto:${attributes.email}`}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </>
    )
}

export default Card;