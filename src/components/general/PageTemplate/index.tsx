"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const PageTemplate = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
    return (
        <motion.div
            className={`${className || ""} relative`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default PageTemplate;