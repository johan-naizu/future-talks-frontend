"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import logo from "/public/logo.svg";
import { neueRegrade } from "@/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Hamburger from "hamburger-react";
const Navbar = () => {
    const navItems = useMemo(() => [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Courses",
            href: "/courses",
        },
        {
            name: "Students",
            href: "/students",
        },
        {
            name: "Professionals",
            href: "/professionals",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Apply",
            href: "/apply",
        }
    ], []);

    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="w-full h-16 bg-none flex relative overflow-hidden">
                <div className={`h-full flex items-center w-full md:w-1/3 py-2 px-4 bg-[#79BCB8] md:rounded-br-2xl justify-between gap-4 font-semibold text-sm xl:text-2xl ${neueRegrade.className}`}>
                    <Image src={logo} alt="logo" width={40} />
                    <span className="text-white hidden md:block"> Future Talks </span>
                    <span className="w-1/3 border hidden md:block" />
                    <div className="block md:hidden flex items-center justify-center overflow-hidden">
                        <div className="z-10">
                            <Hamburger toggled={open} toggle={setOpen} color="white" />
                        </div>
                        {
                            !open && (
                                <motion.span
                                    layoutId="circle"
                                    className="p-10 absolute bg-[#79BCB8] rounded-3xl absolute top-0 right-0 h-full w-full -z-10"
                                />
                            )
                        }
                    </div>
                </div>

                <div className="w-full items-center justify-end gap-8 py-2 px-4 hidden md:flex">
                    {
                        navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`relative p-2 text-primarycolor font-medium text-sm xl:text-md ${item.name === "Apply" ? "bg-primarycolor text-white px-4 py-2 rounded-full" : ""}`}
                            >
                                {item.name}
                                {
                                    item.href === pathname && item.name !== "Apply" && (
                                        <motion.span
                                            layoutId="nav-item-bottom"
                                            className="absolute left-0 bottom-0 w-full h-0 border border-4 border-primarycolor border-t-transparent border-s-transparent border-e-transparent bg-transparent"
                                        />
                                    )
                                }

                            </Link>
                        ))
                    }
                </div>
            </nav>
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            className="w-full justify-center items-center gap-4 py-2 px-16 flex flex-col md:hidden bg-[#79BCB8] rounded-3xl absolute top-0 right-0 h-1/2"
                            layoutId="circle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {
                                navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`relative p-2 px-32 w-full text-center text-white font-medium text-sm xl:text-md rounded-full ${item.name === "Apply" ? "bg-primarycolor text-white p-2" : ""} ${item.href === pathname ? "bg-neutral-800 text-white" : ""}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>

    )
}

export default Navbar;