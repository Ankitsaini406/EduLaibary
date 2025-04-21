import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/lib/SmoothScroll";
import TailwindIndicator from "@/lib/tailwindIndicater";


export default function ChildLayout({ children }: { children: React.ReactNode }) {
    return (
        <SmoothScroll>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <TailwindIndicator />
            <Footer />
        </SmoothScroll>
    )
}