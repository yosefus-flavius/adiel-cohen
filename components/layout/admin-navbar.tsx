import { MobileMenu } from "@/components/ui/mobile-menu";
import Link from "next/link";

const adminLinks = [
    { href: "/admin", name: "בית אדמין" },
    { href: "/admin/blogs", name: "בלוגים" },
    { href: "/", name: "בית לקוחות" },
]

export default function AdminNavbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 /80 backdrop-blur-md border-b">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-[var(--primary-color)]">
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
                </div>
                <MobileMenu links={adminLinks} />
            </nav>
        </header>
    );
}

