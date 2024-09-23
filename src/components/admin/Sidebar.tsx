import { LayoutDashboard, Settings, ShoppingBag, Users } from "lucide-react";
import { ThemeSwitch } from "../ThemeSwitch";
import Link from "next/link";

type sidebarItemsType = {
    label: string;
    href: string;
    icon: any;
};

const sidebarItems: sidebarItemsType[] = [
    {
        label: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutDashboard
    },
    {
        label: 'Users',
        href: '/admin/users',
        icon: Users
    },
    {
        label: 'Products',
        href: '/admin/products',
        icon: ShoppingBag,
    },
    {
        label: 'Settings',
        href: '/admin/settings',
        icon: Settings
    },
];

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-background shadow-md">
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-forground">Admin Panel</h1>
                <ThemeSwitch />
            </div>
            <nav className="mt-4">

                {
                    sidebarItems.map((item, index) => (
                        <Link href={item.href} key={index} className="flex items-center px-4 py-2 hover:bg-base transition-colors">
                            <item.icon className="w-5 h-5 mr-2" />
                            {item.label}
                        </Link>
                    ))
                }
            </nav>
        </aside>
    )
}