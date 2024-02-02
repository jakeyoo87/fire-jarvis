import { LoginPage } from "@/app/page";
import SideNav from "@/app/ui/side-nav";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-none w-full md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow overflow-auto p-4 md:p-2 bg-red-500">
                {children}
            </div>
        </div>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const login = true;
    return (
        <html lang="en">
            <body className={inter.className}>
                {login ? <Layout>{children}</Layout> : <LoginPage />}
            </body>
        </html>
    );
}
