//TODO: font Neue Regrade

import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { subjectivity } from "@/fonts";
import Link from "next/link";
const Footer = () => {
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
            name: "PROFESSIONALS",
            href: "/professionals",
        }
    ], []);

    const socialLinks = useMemo(() => [
        {
            name: "instagram",
            icon: faInstagram,
            href: "https://www.instagram.com/",
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

    return (
        <footer className="grid grid-rows-8 grid-cols-4 bg-primarycolor h-96 w-screen text-white text-[0.75rem]">
            <div className={`col-start-1 col-span-4 row-start-1 row-span-3 p-2 text-xl sm:text-3xl xl:text-6xl flex items-center justify-center text-center border border-0 border-b-2 ${subjectivity.className}`}>
                JOIN US ON THE ROAD TO SUCCESS
            </div>
            <div className="col-start-1 col-span-2 row-start-4 row-span-4 p-2 border border-0 border-b-2 border-e-2">
                <div className="overflow-hidden w-full lg:w-1/2  p-2 ">
                    Do you want to know which college to join or which course to pursue? <br /> Get in touch with us!
                </div>
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