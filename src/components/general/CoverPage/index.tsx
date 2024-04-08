"use client";

import { neueRegrade } from "@/fonts";
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Blur from '/public/blur.svg';
import BlurNearbyThing from '/public/blurNearbyThing.svg';
import Filter from '/public/filter.svg';
import 'font-awesome/css/font-awesome.min.css';
import { Dispatch, SetStateAction, useState } from "react";
import Select, { SingleValue } from 'react-select';


const CoverPage = ({
    title,
    filterData,
    setSelctedFilter,
    searchText,
    setSearchText,
}: {
    title: string,
    filterData?: {
        value: string | null,
        label: string
    }[],
    setSelctedFilter?: Dispatch<SetStateAction<string | null>>,
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
}) => {
    const [openFilter, setOpenFilter] = useState(false);

    const handleChange = (newValue: SingleValue<{
        value: string | null,
        label: string
    }>) => {
        (setSelctedFilter != undefined) && setSelctedFilter(newValue?.value || null)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }
    return (
        <div className={`${neueRegrade.className} pt-24 h-[70dvh] flex flex-col  items-center justify-center relative`}>
            <div className="flex items-center justify-center gap-4 h-18 md:h-36 gap-24 ">
                <div className="relative self-start">
                    <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                    <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -top-1 -right-1 w-4 md:-top-2 md:-right-2 md:w-8" />
                </div>

                <h1 className="text-6xl md:text-[8rem] text-center font-bold italic">{title}</h1>

                <div className="relative self-end">
                    <Image src={Blur} alt="blur1" width={100} className="w-8 md:w-16" />
                    <Image src={BlurNearbyThing} alt="blur1-nearby-thing" width={50} className="absolute -bottom-1 -left-1 w-4 md:w-8 md:-bottom-2 md:-left-1" />
                </div>
            </div>

            <div className="border border-primarycolor mt-16 md:mt-0 lg:absolute w-11/12 md:w-96 py-1 px-2 rounded-md bottom-0 left-48 bg-white flex items-center justify-center">
                <input
                    className="border-0 font-[FontAwesome] p-1 px-2 rounded-md w-full h-full bg-transparent text-primarycolor focus:outline-none"
                    placeholder="&#xF002; Search ..."
                    name="search"
                    value={searchText}
                    onChange={handleInputChange}
                />
                {
                    setSelctedFilter && filterData && (
                        <div className="h-12 rounded-md flex items-center justify-center relative cursor-pointer">
                            <Image
                                src={Filter}
                                alt="filter"
                                width={50}
                                onClick={() => setOpenFilter(!openFilter)}
                                className="hover:brightness-75 transition-transform duration-300 ease-in-out"
                            />
                            <AnimatePresence>
                                {
                                    openFilter && (
                                        <motion.div
                                            className="absolute bg-primarycolor rounded-md p-4 h-12 w-64 lg:w-96 top-16 -right-0 -left-none flex items-center"
                                            initial={{ opacity: 0, height: "0%", overflow: "hidden" }}
                                            animate={{ opacity: [0, 0.4, 1], height: ["20%", "150%"], overflow: "visible" }}
                                            exit={{ opacity: 0, height: "0%", overflow: "hidden" }}
                                        >
                                            <motion.span
                                                className="absolute bg-primarycolor p-2 h-4 w-4 -top-4 right-2"
                                                style={{
                                                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
                                                }}
                                            />
                                            <Select
                                                defaultValue={filterData[0]}
                                                isSearchable={false}
                                                options={filterData}
                                                className="w-full"
                                                onChange={handleChange}
                                                styles={{
                                                    control(base) {
                                                        return {
                                                            ...base,
                                                            backgroundColor: "#47706B",
                                                            color: '#fff',

                                                        }
                                                    },
                                                    placeholder(base) {
                                                        return {
                                                            ...base,
                                                            color: '#fff',
                                                        }
                                                    },
                                                    singleValue(base) {
                                                        return {
                                                            ...base,
                                                            color: '#fff',
                                                        }
                                                    },
                                                    input(base) {
                                                        return {
                                                            ...base,
                                                            color: '#fff',
                                                        }
                                                    }

                                                }}
                                            />
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CoverPage;