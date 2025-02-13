import { Link, usePage } from '@inertiajs/react';
import { links } from '@/Arrays/HrefDetails';
import { ScrollNavigate } from '@/Animations/ScrollNavigate';
import { findLink } from '@/Arrays/FindLink';
const Navigation = () => {
    const { url } = usePage();
    const findlink = findLink();
    console.log(findlink.next);



    return (

        <div className="flex justify-end flex-grow transition max-md:justify-center md:me-60 eas-in-out lg:me-96" >
            {/* <ScrollNavigate next={findlink.next} back={findlink.back} /> */}
            {
                links.map((link, index) => {
                    const isActive = url === link.href;
                    const bgColor = `bg-${link.color}-600`;
                    const textColor = `text-${link.color}-600`;
                    return (
                        <Link
                            className={`px-4 duration-200 eas-in-out py-2 border-none rounded-t-2xl cursor-pointer  ${isActive ? `${bgColor} text-white font-semibold focus:ring-1 focus:ring-blue-400` : `hover:pt-2 hover:py-2 hover:font-bold hover:text-violet-900 hover:bg-gray-200`} focus:outline-none `}
                            key={index}
                            href={link.href}
                            as="button"
                        >
                            {link.label}
                        </Link>
                    );
                })
            }
        </div>

    );
};

export default Navigation;
