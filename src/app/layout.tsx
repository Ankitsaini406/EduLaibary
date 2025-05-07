import type { Metadata } from "next";
import "./globals.css";
import ChildLayout from "./childLayout";

export const metadata: Metadata = {
  title: {
    default: "Edu Library",
    template: "%s | Edu Library",
  },
  description: "A comprehensive platform for managing and accessing educational resources.",
  keywords: ["library", "education", "books", "learning", "Edu Library"],
  // metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Edu Library",
    description: "Access and manage a wide range of educational resources seamlessly.",
    // url: "https://yourdomain.com",
    siteName: "Edu Library",
    images: [
      {
        url: "/heroimage.png",
        width: 1200,
        height: 630,
        alt: "Edu Library Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Edu Library",
  //   description: "Your gateway to a vast collection of educational materials.",
  //   images: ["/twitter-image.jpg"], // Ensure this image exists in your public directory
  //   creator: "@EduLibrary", // Replace with your actual Twitter handle
  // },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <ChildLayout>{children}</ChildLayout>
      </body>
    </html>
  );
}
