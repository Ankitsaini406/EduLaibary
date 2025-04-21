import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TailwindIndicator from "@/lib/tailwindIndicater";


export default function ChildLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <TailwindIndicator />
            <Footer />
        </>
    )
}