
export default function Header() {

    const items = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About Us",
            link: "#",
        },
        {
            title: "Features",
            link: "#",
        },
        {
            title: "Pricing",
            link: "#",
        },
        {
            title: "Testimonials",
            link: "#",
        },
        {
            title: "Download",
            link: "#",
        },
        {
            title: "Contact",
            link: "#",
        }
    ]

    return (
        <header className="sticky top-0 p-5 shadow-lg bg-white/50 backdrop-blur-lg">
            <nav className="container flex justify-between mx-auto">
                <h1 className="text-2xl bg-gradient-to-b from-red-400 to-yellow-400 bg-clip-text text-transparent">EduLibrary</h1>
                <ul className="flex gap-5">
                    {
                        items.map((item) => {
                            return (
                                <li key={item.title} className="cursor-pointer text-lg hover:text-amber-500 duration-300">
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}