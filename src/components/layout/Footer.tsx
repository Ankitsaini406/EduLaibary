

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-5">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Branding */}
                <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-b from-accent to-yellow-400 bg-clip-text text-transparent">
                        EduLibrary
                    </h1>
                    <p className="text-gray-400 text-sm mt-2 max-w-sm">
                        Revolutionizing library management with cutting-edge features and an intuitive experience.
                    </p>
                </div>

                {/* Quick Links */}
                {/* <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                        <li><a href="#features" className="hover:text-accent">Features</a></li>
                        <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
                        <li><a href="#download" className="hover:text-accent">Download</a></li>
                        <li><a href="#about-us" className="hover:text-accent">About Us</a></li>
                        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
                    </ul>
                </div> */}


                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                        <li>Email: <a href="mailto:support@edulibrary.com" className="hover:text-accent">support@edulibrary.com</a></li>
                        <li>Phone: <a href="tel:+911234567890" className="hover:text-accent">+91 12345 67890</a></li>
                        <li>Address: EduLibrary HQ, India</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} EduLibrary. All rights reserved.
            </div>
        </footer>
    );
}
