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
            className={className || ""}
            initial={{ position: 'absolute', y: 25, opacity: 0 }}
            animate={{ position: 'relative', y: 0, opacity: 1 }}
            exit={{ position: 'absolute', y: 25, opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default PageTemplate;