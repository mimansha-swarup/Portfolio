import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mimansha Swarup's Portfolio",
  openGraph: {
    images: [
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1719069772698/0472c3a7-fccb-4277-a51a-a8d2a3a4d1e2.jpeg",
    ],
  },
  twitter: {
    images: [
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1719069772698/0472c3a7-fccb-4277-a51a-a8d2a3a4d1e2.jpeg",
    ],
  },
  description:
    "Explore the portfolio of an innovative Frontend Developer specializing in crafting visually stunning, user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, and modern frameworks, this portfolio showcases a range of projects highlighting responsive design, intuitive interfaces, and seamless user experiences. Discover the skills and creativity that drive exceptional web development and elevate digital presence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark-500`}>
        <Navbar />
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
