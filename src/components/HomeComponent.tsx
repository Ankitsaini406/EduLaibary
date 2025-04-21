"use client";

import GppGoodIcon from '@mui/icons-material/GppGood';
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutUs() {
    return (
        <motion.div
            className="bg-white p-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-bold text-2xl text-accent">EduLibray - Library Manager App</h1>
                <p className="leading-7 pb-4">
                    Introducing EduLibrary, the ultimate library management app designed to revolutionize the way libraries are managed worldwide. Tailored to meet the diverse needs of libraries, EduLibrary is the comprehensive solution that empowers library owners with efficient tools for seamless management. With an intuitive interface and a host of powerful features, EduLibrary ensures that every aspect of library operations is effortlessly organized.
                </p>
                <p className="leading-7">
                    From optimizing seat allocation with the innovative Seat Matrix Management feature to simplifying staff scheduling through Shift Management, EduLibrary streamlines operations like never before. Member Management keeps track of borrower information and borrowing history, enabling personalized services that enhance user experience.
                </p>
            </div>
        </motion.div>
    );
}

export function Features() {
    return (
        <motion.div
            className="bg-accent"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-[1400px] mx-auto p-5">
                <h1 className="uppercase text-3xl text-white text-center font-bold">Our Key Features</h1>
                <div className="grid grid-cols-5">{/* Your future feature items */}</div>
            </div>
        </motion.div>
    );
}

export function PriceSection() {

    const prices = [{
        title: "Silver",
        price: "₹200",
        features: ["5 Products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"],
        primary: false
    }, {
        title: "Platinum",
        price: "₹600",
        features: ["5 Products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time", "48-hour support response time", "48-hour support response time"],
        primary: true
    }, {
        title: "Gold",
        price: "₹500",
        features: ["5 Products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time", "48-hour support response time"],
        primary: false
    }]

    return (
        <motion.div
            className="bg-white p-5 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <h3 className="text-orange-400 pb-4">Pricing</h3>
            <h2 className="text-black font-bold text-3xl pb-1">Pricing that grows with you</h2>
            <p className="text-gray-700 md:w-1/2 mx-auto mb-8">
                Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
            </p>

            <div className="flex flex-col md:flex-row gap-2.5 justify-center pb-10">
                {prices.map(({ title, price, features, primary }) => (
                    <motion.section
                        key={title}
                        whileHover={{ scale: 1.05 }}
                        className={`border border-border bg-white text-left rounded-xl p-5 flex flex-col items-center gap-3`}
                    >
                        <h4 className="font-black">{title}</h4>
                        <h5 className="text-gray-700">The essentials to provide your best work for clients.</h5>
                        <h6 className="text-4xl">{price}<span className="text-base"> /month</span></h6>
                        <button className={`py-1.5 border ${primary ? "bg-accent text-white" : "border-accent"} cursor-pointer w-full`}>
                            Buy Plan
                        </button>
                        <div className="flex flex-col gap-2.5 w-full">
                            {features.map((feature, idx) => (
                                <div key={idx} className="text-secendory">
                                    <GppGoodIcon className="text-accent" /> {feature}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>
        </motion.div>
    );
}
