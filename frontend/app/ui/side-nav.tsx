import NavLinks from "@/app/ui/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
    return (
        <div className="flex flex-grow  h-full flex-col p-4 md:p-2">
            {/* <div className="pt-2 pb-2">
                <Logo />
            </div> */}
            <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
            </div>
            <div className="hidden md:block h-auto w-full flex-grow rounded-md bg-gray-100 mt-2 mb-2"></div>
            <div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
