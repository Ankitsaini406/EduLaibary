import { ArrowRightAlt } from "@mui/icons-material"

export function AboutUs() {
    return (
        <div className="bg-white p-5">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-bold text-2xl text-orange-400">Go Libray - Laibrary Manager App</h1>
                <p className="leading-7 pb-4">
                    Introducing GO-Library, the ultimate library management app designed to revolutionize the way libraries are managed worldwide. Tailored to meet the diverse needs of libraries, GO-Library is the comprehensive solution that empowers library owners with efficient tools for seamless management. With an intuitive interface and a host of powerful features, GO-Library ensures that every aspect of library operations is effortlessly organized.
                </p>
                <p className="leading-7">
                    From optimizing seat allocation with the innovative Seat Matrix Management feature to simplifying staff scheduling through Shift Management, GO-Library streamlines operations like never before. Member Management keeps track of borrower information and borrowing history, enabling personalized services that enhance user experience.
                </p>
            </div>
        </div>
    )
}

export function Features() {
    return (
        <div className="bg-orange-400">
            <div className="max-w-[1400px] mx-auto p-5">
                <h1 className="uppercase text-3xl text-white text-center font-bold">Our Key Features</h1>
                <div className="grid grid-cols-5">
                </div>
            </div>
        </div>
    )
}

export function Slider() {

}


export function PriceSection() {
    return (
        <div className="bg-white p-5 text-center">
            <h3 className="text-orange-400 pb-4">Pricing</h3>
            <h2 className="text-black font-bold text-3xl pb-1">Pricing that frows with you</h2>
            <p className="text-gray-700 md:w-1/2 mx-auto mb-8">Choose and affordable plan that&apos;s packed with the best features for engaging yout audience, creating customer loyalty, and driving sales.</p>

            <div className="flex flex-col md:flex-row gap-2.5 justify-center pb-10">

                <section className="border border-border bg-white text-left rounded-xl p-5 flex flex-col items-center gap-3">
                    <h4 className="font-black">Silver</h4>
                    <h5 className="text-gray-700">The esentials to provide your best work for clients.</h5>
                    <h6 className="text-4xl">₹200<span className="text-base"> /month</span></h6>
                    <button className="py-1.5 border border-accent cursor-pointer w-full">Buy Plan</button>
                    <div className="flex flex-col gap-2.5 w-full">
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 5 Products</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Up to 1,000 subscribers</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 48-hour support response time</div>
                    </div>
                </section>

                <section className="border border-border bg-white text-left rounded-xl p-5 flex flex-col items-center gap-3 scale-100 md:scale-110">
                    <h4 className="font-black">Platinum</h4>
                    <h5 className="text-gray-700">The esentials to provide your best work for clients.</h5>
                    <h6 className="text-4xl">₹600<span className="text-base"> /month</span></h6>
                    <button className="py-1.5 border bg-accent text-white border-accent cursor-pointer w-full">Buy Plan</button>
                    <div className="flex flex-col gap-2.5 w-full">
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 5 Products</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Up to 1,000 subscribers</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 48-hour support response time</div>
                    </div>
                </section>

                <section className="border border-border bg-white text-left rounded-xl p-5 flex flex-col items-center gap-3">
                    <h4 className="font-black">Gold</h4>
                    <h5 className="text-gray-700">The esentials to provide your best work for clients.</h5>
                    <h6 className="text-4xl">₹500<span className="text-base"> /month</span></h6>
                    <button className="py-1.5 border border-accent cursor-pointer w-full">Buy Plan</button>
                    <div className="flex flex-col gap-2.5 w-full">
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 5 Products</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Up to 1,000 subscribers</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Up to 1,000 subscribers</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Up to 1,000 subscribers</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> Basic analytics</div>
                        <div className="text-secendory"><ArrowRightAlt className="text-accent" /> 48-hour support response time</div>
                    </div>
                </section>
            </div>
        </div>
    )
}