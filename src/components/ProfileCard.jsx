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

    const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-80 h-[420px] group"
        >
            {/* Soft Minimal Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition shadow-lg shadow-blue-500/30
" />

            {/* Main Card */}
            <div className="relative w-full h-full rounded-3xl bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl">
                {/* Image */}
                <div className="relative h-[55%] overflow-hidden">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Status */}
                    {status && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {status}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[45%]">
                    <div>
                        <h3 className="text-2xl font-semibold text-white tracking-wide">
                            {name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{title}</p>
                        <p className="text-xs text-blue-400 mt-2 font-mono">@{handle}</p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onContactClick?.();
                        }}
                        className="mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-white font-medium transition-all flex items-center justify-center gap-2"
                    >
                        {contactText}
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
