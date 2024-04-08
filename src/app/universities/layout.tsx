"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react"

const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <>
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </>
    )
}

export default Layout;