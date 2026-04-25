"use client";

import { motion } from "framer-motion";

interface Props {
    isOpen: boolean;
}

export default function AnimatedHamburger({ isOpen }: Props) {
    const variant = isOpen ? "opened" : "closed";

    const top = {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: 45, translateY: 6 },
    };
    const center = {
        closed: { opacity: 1 },
        opened: { opacity: 0 },
    };
    const bottom = {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: -45, translateY: -6 },
    };

    const lineProps = {
        stroke: "currentColor",
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    };

    return (
        <motion.svg
            viewBox="0 0 24 24"
            overflow="visible"
            preserveAspectRatio="none"
            width="24"
            height="24"
            className="text-white"
        >
            <motion.line x1="0" x2="24" y1="6" y2="6" variants={top} {...lineProps} />
            <motion.line x1="0" x2="24" y1="12" y2="12" variants={center} {...lineProps} />
            <motion.line x1="0" x2="24" y1="18" y2="18" variants={bottom} {...lineProps} />
        </motion.svg>
    );
}
