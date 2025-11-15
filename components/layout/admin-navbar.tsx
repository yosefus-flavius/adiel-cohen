import { signOut } from "@/auth";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Calculator, FileText, Home, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const adminLinks = [
    {
        href: "/admin",
        name: "בית אדמין",
        icon: <LayoutDashboard/>
    },
    {
        href: "/admin/blogs",
        name: "מאמרים",
        icon: <FileText/>
    },
    {
        href: "/",
        name: "בית לקוחות",
        icon: <Home/>
    },
    {
        href: "/admin/leads?isActive=active",
        name: "לידים",
        icon: <Calculator/>
    },
]

export default function AdminNavbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 /80 backdrop-blur-md border-b">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-(--primary-color)">
                    עדיאל כהן
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {adminLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-semibold text-gray-600 hover:text-gray-500"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <form action={async () => {
                        "use server";
                        return signOut();
                    }}>
                        <Button >
                            התנתק
                        </Button>
                    </form>
                </div>
                <MobileMenu links={adminLinks.map(a=> ({ href: a.href, name: a.name}))} />
            </nav>
        </header>
    );
}

