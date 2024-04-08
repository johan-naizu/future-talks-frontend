"use client";

import Image from "next/image";
import Grid from '/public/Gride.svg'
import { circIn, motion } from 'framer-motion';
import { neueRegrade, poppins } from "@/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons/faMapMarker";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Circle from '/public/circle-contact-both.svg';
import Button from "@/components/general/Button";
import { useState } from "react";
import { generateMessage, sendMessage } from "@/lib/getInTouch";
import { Bounce, toast, ToastContainer } from "react-toastify";
const Contact = () => {

    const [formData, setFormData] = useState<{
        fname: string,
        lname: string,
        email: string,
        phone: string,
        message: string
    }>({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await sendMessage({
                name: `${formData.fname} ${formData.lname}`,
                email: formData.email,
                message: generateMessage(formData.message, formData.fname, formData.lname, formData.phone)
            })
            toast.success("Message sent successfully")
        }
        catch (e) {
            console.log(e)
            toast.error("An error occurred while sending the message")
        }
    }

    return (
        <div className="w-screen h-full relative mt-32 mb-24">
            <Image
                src={Grid}
                alt="Contact"
                className="absolute top-0 left-0 w-full h-full -z-10"
            />

            <div className={"flex items-center justify-center gap-4 h-18 md:h-36 gap-24 " + neueRegrade.className}>
                <h1 className="text-6xl md:text-[7rem] text-center font-bold italic">Contact Us</h1>
            </div>

            <div className={"mt-24 w-full h-full flex items-center justify-center " + poppins.className}>
                <div className="w-full lg:w-4/5 mx-4 lg:mx-0 h-full lg:h-[600px] bg-white border border-primarycolor rounded-3xl overflow-hidden p-2 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 bg-primarycolor h-full rounded-3xl p-10 text-white flex flex-col justify-start lg:justify-between relative overflow-hidden">
                        <Image
                            src={Circle}
                            alt="contact-circle-big"
                            className="absolute bottom-0 right-0 hidden lg:block    "
                            width={200}
                            height={200}
                        />
                        <div className="flex gap-4 flex-col justify-self-start">
                            <span className="text-xl font-bold"> Contact information </span>
                            <span className="text-sm text-gray-300 font-regular"> Say something to get in touch with us</span>
                        </div>

                        <div className="w-full lg:w-11/12 flex flex-col gap-2 mt-10 lg:mt-0">
                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faMapMarker} width={20} className="text-inherit" />
                                <span className="text-sm"> 1234 Street Name, City Name, United States</span>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faEnvelope} width={20} className="text-inherit" />
                                <span className="text-sm">
                                    contact@futuretalks.com
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <FontAwesomeIcon icon={faPhone} width={20} className="text-inherit" />
                                <span className="text-sm"> +91 9448239840</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4 items-center justify-center lg:justify-start w-full mt-10 lg:mt-0">
                            <motion.a
                                className="rounded-full p-2 flex items-center justify-center"
                                initial={{
                                    backgroundColor: "#79BCB8",
                                    color: "white"
                                }}
                                whileHover={{
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            >
                                <FontAwesomeIcon icon={faFacebook} width={20} className="text-inherit" />
                            </motion.a>
                            <motion.a
                                className="rounded-full p-2 flex items-center justify-center"
                                initial={{
                                    backgroundColor: "#79BCB8",
                                    color: "white"
                                }}
                                whileHover={{
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            >
                                <FontAwesomeIcon icon={faTwitter} width={20} className="text-inherit" />
                            </motion.a>
                            <motion.a
                                className="rounded-full p-2 flex items-center justify-center"

                                initial={{
                                    backgroundColor: "#79BCB8",
                                    color: "white"
                                }}
                                whileHover={{
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            >
                                <FontAwesomeIcon icon={faInstagram} width={20} className="text-inherit" />
                            </motion.a>
                        </div>
                    </div>

                    <form className="w-full lg:w-2/3 h-full flex flex-col gap-4 p-4 lg:p-10">
                        <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center">
                            <div className="flex flex-col gap-2 w-full text-gray-500 text-gray-500 focus-within:text-black">
                                <label htmlFor="fname" className="text-sm text-inherit font-semibold">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    className="p-2 border-0 border-b-2 rounded-none focus:outline-0 focus:border-black active:outline-0 hover:outline-0 h-8"
                                    onChange={handleChange}
                                    value={formData.fname}
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full text-gray-500 text-gray-500 focus-within:text-black">
                                <label htmlFor="lname" className="text-sm text-inherit font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    onChange={handleChange}
                                    className="p-2 border-0 border-b-2 rounded-none focus:outline-0 focus:border-black active:outline-0 hover:outline-0 h-8"
                                    value={formData.lname}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-2 w-full items-center justify-center">
                            <div className="flex w-full flex-col gap-2 text-gray-500 focus-within:text-black">
                                <label htmlFor="email" className="text-sm text-inherit font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    className="p-2 border-0 border-b-2 rounded-none focus:outline-0 focus:border-black active:outline-0 hover:outline-0 h-8"
                                    value={formData.email}
                                />
                            </div>

                            <div className="flex w-full flex-col gap-2 text-gray-500 text-gray-500 focus-within:text-black">
                                <label htmlFor="phone" className="text-sm text-inherit font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    onChange={handleChange}
                                    className="p-2 border-0 border-b-2 rounded-none focus:outline-0 focus:border-black active:outline-0 hover:outline-0 h-8"
                                    value={formData.phone}
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-2 text-gray-500 text-gray-500 focus-within:text-black">
                            <label htmlFor="message" className="text-sm text-inherit font-medium">Message</label>
                            <input
                                type="text"
                                name="message"
                                id="message"
                                onChange={handleChange}
                                className="p-2 border-0 border-b-2 rounded-none focus:outline-0 focus:border-black active:outline-0 hover:outline-0 h-8 resize-none"
                                value={formData.message}
                            />
                        </div>

                        <div className="flex justify-end w-full">
                            <div className="w-full lg:w-1/4">
                                <button
                                    className="w-full bg-primarycolor text-white p-2 rounded-full hover:bg-white hover:text-primarycolor border border-primarycolor transition-colors ease-in-out"
                                    onClick={handleSubmit}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>

                        <div className="text-lg mt-10 font-medium text-center">
                            We&apos;ll get back to you as soon as we can
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default Contact;