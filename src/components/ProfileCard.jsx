import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProfileCard = ({
    src,
    alt = "Profile",
    name = "Zaki Anwar",
    title = "Full Stack Developer",
    handle = "zakianwar",
    status = "Available",
    contactText = "Let's Connect",
    onContactClick
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[360px] h-[480px] group perspective-1000"
        >
            {/* Animated Gradient Border */}
            <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-gradient-rotate" />

            {/* Outer Glow */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Card Container */}
            <div className="relative w-full h-full rounded-[26px] bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl">

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                {/* Image Section */}
                <div className="relative h-[58%] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Status Badge */}
                    {status && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-5 right-5 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-white border border-white/10 shadow-lg"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            {status}
                        </motion.div>
                    )}
                </div>

                {/* Content Section */}
                <div className="relative p-7 flex flex-col justify-between h-[42%] bg-gradient-to-b from-slate-900/50 to-slate-900">
                    <div className="space-y-3">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-bold text-white tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text"
                        >
                            {name}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-sm text-gray-300 font-medium"
                        >
                            {title}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xs text-blue-400 font-mono tracking-wide flex items-center gap-1.5"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                            @{handle}
                        </motion.p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            onContactClick?.();
                        }}
                        className="relative mt-5 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group/button"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative">{contactText}</span>
                        <svg
                            className="relative w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
