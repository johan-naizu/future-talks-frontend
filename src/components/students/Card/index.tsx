"use client";
import Image from "next/image";
import profile from "/public/userLogo.svg";
import Button from "@/components/general/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({
    id,
    name,
    course,
    remarks,
    contact,
    email,
}: {
    id: number,
    name: string,
    course: string,
    remarks: string,
    contact: string,
    email: string,
}) => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(0);
    const sampleImages = [
        "/userLogo.svg",
        "/userLogo.svg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sampleImages.length);
        }, 3000);
        return () => clearInterval(interval);

    }, []);

    return (
        <>
            {
                !show && (
                    <motion.div
                        className="w-full bg-white shadow-2xl shadow-primarycolor/40 border border-primarycolor h-full lg:h-72 rounded-3xl p-8 font-inherit flex flex-col relative"
                        layoutId={`student-card-${id}`}
                        onClick={() => setShow(true)}
                    >
                        <div className="flex w-full gap-4">
                            <motion.img
                                src="/userLogo.svg"
                                alt="profile"
                                layoutId={`student-card-${id}-image`}
                            />
                            <motion.div
                                className="flex flex-col w-full"
                                layoutId={`student-card-${id}-header`}>
                                <span className="font-medium text-lg">{name}</span>
                                <span className="font-regular text-neutral-500">{course}</span>
                            </motion.div>
                        </div>
                        <motion.div
                            className="flex flex-col w-full justify-between mt-4 h-24"
                            layoutId={`student-card-${id}-content`}
                        >
                            <span className="font-medium text-lg">Remarks</span>
                            <span className="font-regular text-neutral-500 h-20 overflow-hidden text-ellipsis">{remarks}</span>
                        </motion.div>

                        <motion.div
                            className="w-full mt-4 lg:mt-0 lg:absolute left-0 bottom-8 flex flex-col lg:flex-row lg:px-8 gap-4"
                            layoutId={`student-card-${id}-footer`}
                        >
                            <div className="w-full lg:w-5/12 xl:w-1/3 text-xs">
                                <Button
                                    text={contact}
                                    rounded
                                    invert
                                    href={`tel:${contact}`}
                                />
                            </div>
                            <div className="w-full lg:w-7/12 xl:w-2/3 text-xs">
                                <Button
                                    text={email}
                                    rounded
                                    href={`mailto:${email}`}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }

            {
                show && (
                    <div
                        className="w-screen h-screen bg-black/20 fixed top-0 left-0 z-[10000000] flex items-center justify-center p-8 md:p-16 lg:p-48"
                    >
                        <motion.div
                            className="w-full bg-white h-full lg:h-96 rounded-3xl font-inherit flex flex-col  lg:flex-row relative gap-8"
                            layoutId={`student-card-${id}`}
                        >

                            <span className="absolute top-8 right-8 z-[10000000000]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-black cursor-pointer"
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
                            <div className="h-1/3 lg:h-full lg:w-1/3 rounded-3xl relative overflow-hidden outline">
                                {/* <Image
                                    className="w-full h-full object-cover"
                                    src={profile}
                                    alt="profile"
                                /> */}
                                <AnimatePresence>
                                    <motion.img
                                        className="w-full h-full object-cover"
                                        src={sampleImages[current]}
                                        layoutId={`student-card-${id}-image`}
                                        alt="profile"
                                        key={current}
                                        initial={{ position: "absolute", x: "-100%" }}
                                        animate={{ position: "relative", x: "0%" }}
                                        exit={{ position: "absolute", x: "100%" }}
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="w-full relative p-8">
                                <motion.div
                                    className="flex w-full flex-col"
                                    layoutId={`student-card-${id}-header`}
                                >
                                    <span className="font-medium text-lg">{name}</span>
                                    <span className="font-regular text-neutral-500">{course}</span>
                                </motion.div>

                                <hr className="text-white" />

                                <motion.div
                                    className="flex flex-col w-full mt-8 h-36"
                                    layoutId={`student-card-${id}-content`}
                                >
                                    <span className="font-medium text-lg">Remarks</span>
                                    <span className="font-regular text-neutral-500 h-20 overflow-hidden text-ellipsis">{remarks}</span>
                                </motion.div>

                                <motion.div
                                    className="w-full mt-4 lg:mt-0 lg:absolute left-0 bottom-8 flex flex-col lg:flex-row lg:px-8 gap-4"
                                    layoutId={`student-card-${id}-footer`}
                                >
                                    <div className="w-full lg:w-5/12 xl:w-1/3 text-xs">
                                        <Button
                                            text={contact}
                                            rounded
                                            invert
                                            href={`tel:${contact}`}
                                        />
                                    </div>
                                    <div className="w-full lg:w-7/12 xl:w-2/3 text-xs">
                                        <Button
                                            text={email}
                                            rounded
                                            href={`mailto:${email}`}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </>
    )
}

export default Card;