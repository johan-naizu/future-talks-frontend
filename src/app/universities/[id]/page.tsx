"use client";

import { useParams, useRouter } from "next/navigation"
import PageTemplate from "@/components/general/PageTemplate";
import Image from 'next/image';
import Grid from '/public/Gride.svg';
import { useCourseContext } from "@/hooks/useCourseContext";
import { Student, University } from "@/types";
import { useEffect, useState } from "react";
import coursesImage from '/public/courses-slug-image.svg';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import { neueRegrade, sourceCodePro } from "@/fonts";
import gradTypeUnderline from '/public/gradtype.svg';
import Button from "@/components/general/Button";
import Card from "@/components/students/Card";
import { AnimatePresence, motion } from "framer-motion";
import RightArrow from '/public/right.svg';
import Popup from "@/components/universities/Popup";

const UniversitySlugPage = () => {
    const params: {
        id: string
    } = useParams()
    const { universities } = useCourseContext();
    const [university, setUniversity] = useState<University | undefined>(undefined);
    const [current, setCurrent] = useState<number>(0);
    const [students, setStudents] = useState<Student[]>([])
    const [image, setImage] = useState(0);
    const [popup, setPopup] = useState(false);



    useEffect(() => {
        const timeout = setTimeout(() => {
            setPopup(true)
        }, 2000)

        return () => clearTimeout(timeout);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(prev => (prev + 1) % (university?.attributes.images?.data.length || 0))
        }, 3000)

        return () => clearInterval(interval);
    }, [university?.attributes.images]);

    useEffect(() => {
        if (universities) {
            const university = universities.data.find(university => university.id == params.id);
            setUniversity(university);
            setStudents(university?.attributes.students?.data || [])
        }
    }, [universities, params.id])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % students.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [students.length])


    const router = useRouter();

    return (
        <PageTemplate
            className="w-screen h-full flex flex-col items-center justify-center relative mb-24"
        >

            <AnimatePresence>
                {
                    popup && (
                        <Popup
                            setShow={setPopup}
                        />
                    )
                }
            </AnimatePresence>
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <div className="flex w-full h-full my-24 px-2 lg:px-8 items-end">
                <div className={"border border-primarycolor rounded-3xl w-full lg:w-2/3 bg-white h-full p-10 relative lg:px-20 xl:px-24 shadow-2xl " + neueRegrade.className}>
                    <span className="absolute top-10 xl:top-24 right-10 xl:right-24 overflow-hidden rounded-full">
                        <AnimatePresence>
                            <motion.img
                                key={image}
                                initial={{ position: "absolute", x: -100 }}
                                animate={{ position: "relative", x: 0 }}
                                exit={{ position: "absolute", x: 100 }}
                                transition={{
                                    duration: 1,
                                    type: "tween",

                                }}
                                src={
                                    university?.attributes.images
                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${university?.attributes.images?.data[image].attributes.url}`
                                        : coursesImage
                                }
                                alt="logo"
                                width={1000}
                                height={1000}
                                className="h-10 lg:h-24 w-10 lg:w-24 object-fit-cover"
                            />
                        </AnimatePresence>
                    </span>
                    <div className="relative">
                        <div className="flex items-center justify-center gap-4 h-18 md:h-36 gap-24">
                            <div className="relative self-start">
                                <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                                <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -top-1 -right-1 w-4 md:-top-2 md:-right-2 md:w-8" />
                            </div>

                            <h1 className="text-4xl md:text-6xl text-center font-bold italic">{university?.attributes.name}</h1>

                            <div className="relative self-end">
                                <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                                <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -bottom-1 -left-1 w-4 md:w-8 md:-bottom-2 md:-left-1" />
                            </div>
                        </div>
                    </div>

                    <div className="font-semibold text-sm text-gray-500 relative mt-24 lg:mt-10 flex flex-col">
                        <span className="w-full lg:w-2/3">
                            {university?.attributes.address}
                        </span>
                        <Image
                            src={gradTypeUnderline}
                            alt="underline"
                            className="left-0 -bottom-4 absolute"
                        />
                    </div>

                    <div className={"w-full lg:w-4/5 mt-24 " + sourceCodePro.className}>
                        <h2 className="text-2xl font-bold mt-4">Description</h2>
                        <p className="mt-4 font-semibold text-lg text-gray-500 overflow-hidden text-ellipsis">{university?.attributes.description}</p>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 text-xs lg:text-md mt-10">
                        <Button
                            onClick={() => router.push("/apply")}
                            text="Apply Now"

                            rounded
                        />
                    </div>
                </div>
                <div className="hidden lg:flex w-1/3 justify-center items-center px-4">
                    <Image
                        src={coursesImage}
                        alt="university"
                        className="w-full max-w-sm"
                        height={200}
                        width={200}
                    />
                </div>
            </div>

            <h1 className="font-semibold mt-24 text-xl"> Student remarks </h1>
            <div className="mt-24 w-full h-full flex overflow-hidden items-center  relative">
                <div className="relative w-full overflow-hidden flex flex-col items-center justify-center gap-10">
                    {
                        (university?.attributes.students?.data.length || 0) > 0 ? (
                            <>
                                <div className="w-full lg:p-0 lg:w-2/3 relative overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            key={current}
                                            initial={{ position: "absolute", x: "100%" }}
                                            animate={{ position: "relative", x: "0%" }}
                                            exit={{ position: "absolute", x: "-100%" }}
                                            transition={{
                                                duration: 1,
                                                type: "tween",
                                            }}
                                            className="w-full h-full"

                                        >
                                            <div className="p-2">
                                                <Card
                                                    key={current}
                                                    {...students[current]}
                                                    removeShadow
                                                />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                {
                                    <div className="w-full flex gap-4 items-center justify-center">
                                        {
                                            Array(students.length).fill(0).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-4 h-4 rounded-full cursor-pointer ${index === current ? "bg-primarycolor" : "bg-gray-300"} `}
                                                    onClick={() => setCurrent(index)}
                                                />
                                            ))
                                        }
                                    </div>
                                }

                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <h1 className="text-sm font-bold text-gray-500">Nothing to display</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </PageTemplate >
    )
}

export default UniversitySlugPage