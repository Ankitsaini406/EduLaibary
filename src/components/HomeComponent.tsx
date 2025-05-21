"use client";

import DoneIcon from '@mui/icons-material/Done';
import { motion } from "framer-motion";
import { useState } from 'react';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutUs() {
    return (
        <motion.div
            id='about-us'
            className="bg-white p-5 mt-5"
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

const featuresData = [
    { icon: "/icons/desk.webp", label: "Seat Management", alt: "Seat" },
    { icon: "/icons/work-schedule.webp", label: "Shift Management", alt: "Shift" },
    { icon: "/icons/group.webp", label: "Member Management", alt: "Member" },
    { icon: "/icons/conversation.webp", label: "Auto SMS Reminder", alt: "Auto SMS" },
    { icon: "/icons/calendar-with-check.webp", label: "Branch Management", alt: "Branch" },
    { icon: "/icons/report.webp", label: "Collection Report", alt: "Collection" },
    { icon: "/icons/enquiry.webp", label: "Enquiry Management", alt: "Enquiry" },
    { icon: "/icons/attendace.webp", label: "Attendance Management", alt: "Attendance" },
    { icon: "/icons/subsidiaries.webp", label: "Expense Management", alt: "Expense" },
    { icon: "/icons/budget.webp", label: "Tax Management", alt: "Tax" },
];

export function Features() {
    return (
        <motion.section
            id="features"
            className="bg-accent py-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-[1400px] mx-auto px-5">
                <h2 className="uppercase text-3xl text-white text-center font-bold pb-10">
                    Our Key Features
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {featuresData.map(({ icon, label, alt }, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-5 min-w-[250px] flex flex-col items-center gap-3 shadow-md hover:shadow-lg transition"
                        >
                            <div className="relative h-10 w-10">
                                <Image
                                    src={icon}
                                    alt={alt || "Feature Icon"}
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm text-secendory text-center">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

const images = [
    "/images/IMG_1405.webp",
    "/images/IMG_1497.webp",
    "/images/IMG_1498.webp",
    "/images/IMG_1499.webp",
    "/images/IMG_1500.webp",
    "/images/IMG_1501.webp",
    "/images/IMG_1502.webp",
    "/images/IMG_1503.webp",
    "/images/IMG_1504.webp",
    "/images/IMG_1505.webp",
]

export function AppScreenshots() {
    const [activeIndex, setActiveIndex] = useState(2)

    const getPositionClass = (index: number) => {
        if (index === activeIndex) return 'z-30 scale-100 opacity-100'
        if (index === (activeIndex - 1 + images.length) % images.length)
            return 'z-20 opacity-50 -translate-x-full scale-90'
        if (index === (activeIndex + 1) % images.length)
            return 'z-20 opacity-50 translate-x-full scale-90'
        return 'z-10 opacity-0 scale-75'
    }

    return (
        <section className="bg-white py-12 text-center">
            <h2 className="text-2xl text-accent font-bold mb-6">App Screenshots</h2>

            <div className="relative flex justify-center items-center h-[600px] overflow-hidden">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute max-w-md px-4 transition-all duration-700 ease-in-out transform ${getPositionClass(index)}`}
                    >
                        <div className='relative w-[300px] h-[600px]'>
                        <Image
                            src={img}
                            alt={`Screenshot ${index + 1}`}
                            fill
                            />
                            </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full transition-transform transform cursor-pointer ${index === activeIndex
                            ? 'bg-accent scale-110'
                            : 'bg-accent/20 hover:bg-accent/60'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
        </section>
    )
}

type SubPlan = {
    title: string;
    features: string[];
    price: string;
};

type Plan = {
    title: string;
    price: string;
    time?: string;
    min?: string;
    line?: string;
    features: string[];
    primary: boolean;
    subPlans?: SubPlan[];
};

const smsSubTabs = ["1K", "2K", "5K", "10K"];
const whatsappSubTabs = ["1K", "2K", "5K", "10K"];

export function PriceSection() {
    const [activeTab, setActiveTab] = useState<"library" | "sms" | "whatsapp">("library");
    const [activeSmsSubTab, setActiveSmsSubTab] = useState("1K");
    const [activeWhatsAppSubTab, setActiveWhatsAppSubTab] = useState("1K");


    const pricePlans = [
        {
            title: "Trial Plan",
            price: "₹0",
            time: "15 Days",
            features: [
                "Multi-user support",
                "Unlimited member additions",
                "Role-based permission managment",
                "10 complimentary SMS credits",
                "Free customer support",
                "Ad-supported experience"
            ],
            primary: false
        },
        {
            title: "Monthly Plan",
            price: "₹159",
            time: "1 Month",
            features: [
                "Multi-user access",
                "Unlimited member additions",
                "Role-based permission managment",
                "50 complimentary SMS credits",
                "Free customer support",
                "Ad-Free experience"
            ],
            primary: true
        },
        {
            title: "Business Plan",
            price: "₹1100",
            time: "1 Year",
            features: [
                "Multi-user access",
                "Unlimited member additions",
                "Role-based permission managment",
                "1000 complimentary SMS credits",
                "Free customer support",
                "Ad-Free experience"
            ],
            primary: false
        }
    ];

    const smsPlans: Plan[] = [
        {
            title: "SMS Subscription",
            price: "₹0.21",
            time: "SMS",
            min: "Minimum SMS to purchase 1000",
            line: "How many SMS do you want to purchase?",
            features: [],
            primary: true,
            subPlans: [
                {
                    title: "1K",
                    price: "₹210",
                    features: ["1000 SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "2K",
                    price: "₹420",
                    features: ["2000 SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "5K",
                    price: "₹1050",
                    features: ["5000 SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "10K",
                    price: "₹2100",
                    features: ["10000 SMS will be added", "No expiry, use anytime."],
                }
            ]
        }
    ];

    const whatsappPlans = [
        {
            title: "WhatsApp Subscription",
            price: "₹0.10",
            time: "SMS",
            min: "Minimum Messages to purchase 1000",
            line: "How many WhatsApp message do you want to purchase ?",
            features: [],
            primary: true,
            subPlans: [
                {
                    title: "1K",
                    price: "₹99",
                    features: ["1000 WhatsApp SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "2K",
                    price: "₹198",
                    features: ["2000 WhatsApp SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "5K",
                    price: "₹495",
                    features: ["5000 WhatsApp SMS will be added", "No expiry, use anytime."],
                },
                {
                    title: "10K",
                    price: "₹990",
                    features: ["10000 WhatsApp SMS will be added", "No expiry, use anytime."],
                }
            ]
        }
    ];

    const plans = {
        library: pricePlans,
        sms: smsPlans,
        whatsapp: whatsappPlans
    };

    const tabLabels = [
        { key: "library", label: "Library" },
        { key: "sms", label: "SMS" },
        { key: "whatsapp", label: "WhatsApp" }
    ];

    return (
        <motion.div
            id="pricing"
            className="bg-white p-5 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-black font-bold text-3xl pb-1">Flexible Plans for Your Needs</h2>
            <p className="text-gray-700 md:w-1/2 mx-auto mb-6">
                Choose a plan that fits your business — whether it&apos;s pricing, SMS credits, or WhatsApp support.
            </p>

            {/* Main Tab Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                {tabLabels.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as "library" | "sms" | "whatsapp")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.key
                            ? "bg-accent text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Plan Cards */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pb-10">
                {plans[activeTab].map((item: Plan) => {
                    const currentSubTab = activeTab === "sms" ? activeSmsSubTab : activeWhatsAppSubTab;
                    const selectedSubPlan = item.subPlans?.find(sub => sub.title === currentSubTab);

                    return (
                        <motion.section
                            key={item.title}
                            whileHover={{ scale: 1.05 }}
                            className="border border-border bg-white text-left rounded-xl p-5 flex flex-col items-center gap-3 w-full md:w-80 shadow-sm"
                        >
                            <h4 className="font-black text-lg">{item.title}</h4>

                            <h6 className="text-3xl font-semibold">
                                {item.price}
                                {item.time && <span className="text-base"> /{item.time}</span>}
                            </h6>

                            {item.min && <p className="text-xs text-gray-600 -mt-2">{item.min}</p>}
                            {item.line && <p className="text-sm text-gray-600 -mt-2">{item.line}</p>}

                            <button
                                className={`py-2 w-full text-sm font-medium rounded ${item.primary ? "bg-accent text-white" : "border border-accent text-accent"
                                    }`}
                            >
                                Choose Plan
                            </button>

                            {/* Sub Tabs */}
                            {(activeTab === "sms" || activeTab === "whatsapp") && item.subPlans && (
                                <div className="flex justify-center gap-3 mb-6 flex-wrap">
                                    {(activeTab === "sms" ? smsSubTabs : whatsappSubTabs).map((sub) => (
                                        <button
                                            key={sub}
                                            onClick={() =>
                                                activeTab === "sms"
                                                    ? setActiveSmsSubTab(sub)
                                                    : setActiveWhatsAppSubTab(sub)
                                            }
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${currentSubTab === sub
                                                ? "bg-accent text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Show Features */}
                            {item.features && item.features.length > 0 ? (
                                <div className="flex flex-col gap-2.5 w-full mt-4 text-gray-700">
                                    {item.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-1">
                                            <DoneIcon className="text-accent mt-1" fontSize="small" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : selectedSubPlan ? (
                                <div className="flex flex-col gap-2.5 w-full mt-4 text-gray-700">
                                    <h5 className="font-semibold text-sm mb-2">{selectedSubPlan.price}</h5>
                                    {selectedSubPlan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-1">
                                            <DoneIcon className="text-accent mt-1" fontSize="small" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </motion.section>
                    );
                })}
            </div>

            <p className="text-gray-700 text-right text-sm">
                * All prices are exclusive of taxes. For more details, please contact our support team.
            </p>

        </motion.div>
    );
}