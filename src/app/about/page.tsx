"use client";
import Image from "next/image";
import Grid from '/public/Gride.svg'
import { neueRegrade, poppins, sourceCodePro } from "@/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBuildingColumns, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Circle from '/public/circle-contact-both.svg';
import Button from "@/components/general/Button";
import { useRouter } from "next/navigation";
const Contact = () => {

    const router = useRouter();
    return (
        <div className="w-screen h-full relative mt-32 mb-24">
            <Image
                src={Grid}
                alt="Contact"
                className="absolute top-0 left-0 w-full h-full -z-10"
            />

            <div className={"flex items-center justify-center gap-4 h-18 md:h-36 gap-24 " + neueRegrade.className}>
                <h1 className="text-6xl md:text-[7rem] text-center font-bold italic">About Us</h1>
            </div>

            <div className={"mt-24 w-full h-full flex items-center justify-center " + poppins.className}>
                <div className="w-full lg:w-4/5 mx-4 lg:m-0 h-full lg:h-[500px] bg-white border border-primarycolor rounded-3xl overflow-hidden p-2 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 bg-primarycolor h-full rounded-3xl p-10 text-white flex flex-col relative overflow-hidden">
                        <Image
                            src={Circle}
                            alt="contact-circle-big"
                            className="absolute bottom-0 right-0 hidden lg:block"
                            width={200}
                            height={200}
                        />
                        <div className="flex gap-4 flex-col justify-self-start">
                            <span className="text-xl font-bold"> Get to know us better </span>
                            <span className="text-sm text-gray-300 font-regular"> Learn more about the company </span>
                        </div>

                        <div className="w-full lg:w-11/12 flex flex-col gap-4 mt-10 lg:mt-24">
                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faUserGraduate} width={20} className="text-inherit" />
                                <span className="text-sm"> 10,000+ students </span>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faBook} width={20} className="text-inherit" />
                                <span className="text-sm">
                                    2500+ courses
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faBuildingColumns} width={20} className="text-inherit" />
                                <span className="text-sm"> 1500+ universities </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 h-full flex flex-col gap-4 p-4 lg:p-10 mt-10 lg:mt-0">
                        <h1 className="font-bold text-3xl"> Why Future Talks? </h1>
                        <p className={"text-gray-500 max-md:text-sm " + sourceCodePro.className}>
                            Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum
                        </p>
                        <div className="w-full mt-auto flex justify-end">
                            <div className="w-full md:w-1/3 xl:w-1/4 ">
                                <Button
                                    text="Contact Us"
                                    rounded
                                    onClick={() => router.push("/contact")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;