"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import logo from '/public/logo.png';
import { neueRegrade } from "@/fonts";
import { usePathname, useRouter } from "next/navigation";
import Hamburger from "hamburger-react";
const Navbar = () => {
    const navItems = useMemo(() => [
        {
            label: "Home",
            name: "",
            href: "/",
        },
        {
            label: "Courses",
            name: "courses",
            href: "/courses",
        },
        {
            label: "Colleges",
            name: "universities",
            href: "/universities",
        },
        {
            label: "Students",
            name: "students",
            href: "/students",
        },
        {
            label: "Experts",
            name: "experts",
            href: "/experts",
        },
        {
            label: "About",
            name: "about",
            href: "/about", //TODO: change back to /about when the page is created
        },
        {
            label: "Apply",
            name: "apply",
            href: "/apply",
        }
    ], []);

    const pathname = usePathname();
    const currentPath = pathname.split("/")[1];
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.nav className="w-full h-16 flex fixed top-0 z-[10000] overflow-hidden">
                <div className={`h-full w-full flex items-center md:w-1/3 py-2 px-4 bg-white font-semibold text-[0.7rem] lg:text-sm xl:text-[1.2rem] ${neueRegrade.className}`}>
                    <Image src={logo} alt="logo" width={150} />
                    {/* <span className="text-white hidden md:block text-center"> Future Talks </span> */}
                    {/* <span className="w-1/3 border hidden md:block" /> */}
                    <div className="block md:hidden flex items-center justify-end overflow-hidden w-full">
                        {/* <span className="w-full font-semibold text-lg text-white">
                            Future Talks
                        </span> */}
                        <div className="z-[1000000000]">
                            <Hamburger toggled={open} toggle={setOpen} color="#1587AD" />
                        </div>
                        {
                            !open && (
                                <motion.span
                                    layoutId="dropdown"
                                    className="p-10 absolute bg-transparent rounded-3xl absolute top-0 right-0 h-full w-full -z-10"
                                />
                            )
                        }
                    </div>
                </div>

                <div className="w-full items-center justify-end gap-8 py-2 px-4 hidden md:flex bg-white">
                    {
                        navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => router.push(item.href)}
                                className={`relative p-1 px-2 text-primarycolor font-medium text-sm xl:text-md ${item.label === "Apply" ? "bg-[#FF9039] text-white px-4 py-2 rounded-full" : ""}`}
                            >
                                {
                                    item.name === currentPath && item.label !== "Apply" && (
                                        <motion.span
                                            layoutId="nav-item-bottom"
                                            className="absolute left-1/4 -bottom-1 w-1/2 p-[0.1rem] rounded-sm bg-primarycolor z-1"
                                        />
                                    )
                                }
                                <span className="z-10">
                                    {item.label}
                                </span>
                            </button>
                        ))
                    }
                </div>
            </motion.nav>
            <AnimatePresence>
                {

                    open && (
                        <>
                            <motion.div
                                className="z-[2] w-full justify-center items-center gap-4 py-2 px-16 flex flex-col md:hidden bg-white shadow-[0_35px_60px_-30px_rgba(0,0,0,1)] rounded-3xl fixed top-10 right-0 h-[60dvh]"
                                layoutId="dropdown"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {
                                    navItems.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setOpen(false)
                                                router.push(item.href)
                                            }}
                                            className={`flex items-center justify-center relative p-2 px-32 w-full text-center font-medium text-sm xl:text-md rounded-full ${item.label === "Apply" ? "bg-[#FF9039] text-white p-2" : ""} ${(item.name === currentPath && item.label !== "Apply") ? "bg-primarycolor text-white" : "text-primarycolor"}`}
                                        >
                                            {item.label}
                                        </button>
                                    ))
                                }
                            </motion.div>
                            <motion.div
                                className="w-screen h-screen z-[1] fixed top-10 right-0 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </>
                    )
                }
            </AnimatePresence>
        </>

    )
}

export default Navbar;