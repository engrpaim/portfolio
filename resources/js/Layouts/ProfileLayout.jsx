import NavLink  from "@/Components/NavLink";
import { Head } from '@inertiajs/react';

export default function ProfileLayout({children, title}) {
    return(
        <div className="isolate">
            <Head title={title} />
            <div className="overflow-x-hidden max-w-screen ">
                <div className="fixed inset-x-0 top-0 z-10 ">
                    <div className="pt-2 bg-white dark:bg-gray-950">
                        <NavLink/>
                    </div>
                </div>

                <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 mt-16 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
                    {children}
                </div>
            </div>
        </div>
    );
}
