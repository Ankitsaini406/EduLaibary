"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="min-h-[80vh] flex bg-white border-b border-accent p-5">
            <div className="mx-auto flex flex-col-reverse ipad:flex-row items-center justify-between gap-10 w-full max-w-7xl">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center ipad:text-left max-w-xl"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Smart Library Seat Booking App
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Check seat availability in real-time. Reserve your spot. Let admins manage seating with ease.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center ipad:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#download"
                            className="px-6 py-3 bg-accent text-white rounded-xl shadow-lg hover:bg-accent/70 transition"
                        >
                            Download the App
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#features"
                            className="px-6 py-3 border border-accent text-accent rounded-xl hover:bg-accent/5 transition"
                        >
                            Explore Features
                        </motion.a>
                    </div>
                </motion.div>

                {/* Responsive App Image */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full ipad:max-w-md"
                >
                    <div className="relative w-full h-64 sm:h-80 md:h-96">
                        <Image
                            src="/heroimage.png"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
