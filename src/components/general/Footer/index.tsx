"use client"

//TODO: font Neue Regrade

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { neueRegrade, subjectivity } from "@/fonts";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
const Footer = () => {
    const [hover, setHover] = useState(false);
    const router = useRouter();
    const links = useMemo(() => [
        {
            name: "HOME",
            href: "/",
        },
        {
            name: "COURSES",
            href: "/courses",
        },
        {
            name: "ABOUT US",
            href: "/about",
        },
        {
            name: "STUDENTS",
            href: "/students",
        },
        {
            name: "CONTACT US",
            href: "/contact",
        },
        {
            name: "EXPERTS",
            href: "/experts",
        }
    ], []);

    const socialLinks = useMemo(() => [
        {
            name: "instagram",
            icon: faInstagram,
            href: "https://www.instagram.com/_future.talks?igsh=MTJsY2s3aWx3M3VpaA==",
        },
        {
            name: "linkedin",
            icon: faLinkedin,
            href: "https://www.linkedin.com/",
        }
    ], []);

    const contacts = useMemo(() => [
        {
            name: "contact@futuretalks.com",
            href: "mailto:contact@futuretalks.com"
        },
        {
            name: "+91 9448239840",
            href: "tel:+919448239840"
        }

    ], [])

    // const { scrollYProgress } = useScroll();
    // const progress = useTransform(scrollYProgress, [0, 1], [15, 0]);
    return (
        <footer className="grid grid-rows-8 grid-cols-4 bg-primarycolor h-96 w-screen text-white text-[0.75rem] overflow-hidden">
            <div className={`col-start-1 col-span-4 row-start-1 row-span-3 p-2 text-xl sm:text-3xl xl:text-6xl flex items-center justify-center text-center border border-0 border-b-2 ${subjectivity.className}`}>
                <span className="hidden lg:inline w-full 2xl:text-[5rem]">
                    <Marquee speed={150}>
                        JOIN US ON THE ROAD TO SUCCESS
                    </Marquee>
                </span>
                <span className="lg:hidden">
                    JOIN US ON THE ROAD TO SUCCESS
                </span>
            </div>
            <div className="col-start-1 col-span-2 row-start-4 row-span-4 p-2 border border-0 border-b-2 border-e-2 relative">
                <div className="overflow-hidden w-full lg:w-1/2 p-2">
                    Do you want to know which college to join or which course to pursue? <br /> Get in touch with us!
                </div>

                <button
                    className={`bg-white text-${hover ? 'white' : 'primarycolor'} ps-4 absolute bottom-4 left-4 font-bold flex items-center justify-center gap-4 z-0 ${neueRegrade.className}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => router.push("/apply")}
                >
                    <span className="z-10">
                        Apply now
                    </span>
                    <div className={`relative text-white z-10 p-2 flex`}>
                        <FontAwesomeIcon icon={faArrowRight} width={10} />
                        {
                            !hover && (
                                <motion.span
                                    layoutId="arrow-bottom"
                                    className="bg-primarycolor/90 absolute top-0 left-0 w-full h-full -z-10"
                                />
                            )
                        }
                    </div>
                    {
                        hover && (
                            <motion.span
                                layoutId="arrow-bottom"
                                className="bg-primarycolor/90 absolute top-0 left-0 w-full h-full z-1"
                            />
                        )
                    }
                </button>
            </div>

            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        className="row-span-1 p-2 flex items-center justify-center xl:justify-start hover:bg-white hover:text-primarycolor transition-all duration-200 text-[0.6rem] border border-0 border-b-2 border-e-2"
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                ))
            }

            {
                socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        className="row-span-1 overflow-hidden flex justify-center items-center  hover:bg-white hover:text-primarycolor  transition-all duration-200  border border-0 border-b-2 border-e-2"
                        href={link.href}
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={link.icon} width={"20px"} />
                    </Link>
                ))
            }
            <div className="row-span-1 col-span-2 p-2 text-[0.6rem] flex items-center border border-0 border-e-2">
                © 2024 ALL RIGHTS RESERVED
            </div>
            <div className="col-span-2 flex flex-col md:flex-row justify-between items-center p-2 text-[0.6rem]">
                {
                    contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            className="hover:underline"
                        >
                            {contact.name}
                        </a>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer;