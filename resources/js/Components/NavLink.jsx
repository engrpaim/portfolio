import { Link, usePage } from '@inertiajs/react';
import { links } from '@/Arrays/HrefDetails';

const Navigation = () => {
    const { url } = usePage();

    return (
        <div className="flex items-center justify-center flex-grow">
            {
                links.map((link, index) => {
                    const isActive = url === link.href;
                    const bgColor = `bg-${link.color}-600`;
                    const textColor = `text-${link.color}-600`;
                    console.log(isActive);
                    return (
                        <Link
                            className={`px-4 duration-200 eas-in-out py-2 border-none rounded-t-2xl cursor-pointer  ${isActive ? `${bgColor} text-white font-semibold focus:ring-1 focus:ring-blue-400` : `hover:pt-2 hover:py-2 hover:${textColor}   hover:bg-gray-200`} focus:outline-none `}
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
