import SideNav from "@/app/home/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-none w-full md:w-64 bg-blue-500">
                <SideNav />
            </div>
            <div className="flex-grow overflow-auto p-4 md:p-2 bg-red-500">
                {children}
            </div>
        </div>
    );
}
