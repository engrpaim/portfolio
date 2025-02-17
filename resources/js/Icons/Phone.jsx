import { Link } from "@inertiajs/react";
export default function phone(){
    return(
        <>
            <a href="/contact" className="">
                <div className="flex flex-row items-center hover:text-violet-700 hover:scale-110 ">
                    <div className="flex flex-row mr-[1rem]">
                        <strong className="text-[1.5rem] md:text-[2rem] hover:text-violet-700 hover:scale-110">Let’s connect!</strong>
                    </div>



                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce  h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] " viewBox="0 -1 34 34" fill="none">
                            <path d="M1.02744 7.27271C0.848395 10.3893 1.41536 13.4881 2.67269 16.5692C3.93002 19.6502 5.7667 22.3988 8.18273 24.8148C10.5988 27.2308 13.3473 29.0675 16.4283 30.3248C19.5095 31.5822 22.6082 32.1318 25.7249 31.9734L25.6129 24.9352C20.9073 24.9352 16.8907 23.2715 13.5633 19.9441C10.236 16.6167 8.57225 12.6002 8.57225 7.89457L1.02744 7.27271Z" fill="url(#paint0_linear_103_1456)"/>
                            <path d="M25.7298 31.9999C29.7464 31.9999 33.0025 28.7438 33.0025 24.7272C33.0025 20.7106 29.7464 17.4545 25.7298 17.4545C21.7131 17.4545 18.457 20.7106 18.457 24.7272C18.457 28.7438 21.7131 31.9999 25.7298 31.9999Z" fill="url(#paint1_radial_103_1456)"/>
                            <path d="M8.27468 14.5455C12.2913 14.5455 15.5474 11.2893 15.5474 7.27273C15.5474 3.25611 12.2913 0 8.27468 0C4.25806 0 1.00195 3.25611 1.00195 7.27273C1.00195 11.2893 4.25806 14.5455 8.27468 14.5455Z" fill="url(#paint2_radial_103_1456)"/>
                            <defs>
                            <linearGradient id="paint0_linear_103_1456" x1="13.36" y1="7.27271" x2="13.36" y2="31.9999" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00EE7A"/>
                            <stop offset="1" stop-color="#00C853"/>
                            </linearGradient>
                            <radialGradient id="paint1_radial_103_1456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.4074 20.6087) rotate(78.4769) scale(11.6255)">
                            <stop stop-color="#00EE7A"/>
                            <stop offset="1" stop-color="#00C853"/>
                            </radialGradient>
                            <radialGradient id="paint2_radial_103_1456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.95233 3.15425) rotate(78.4769) scale(11.6255)">
                                <stop stop-color="#00EE7A"/>
                                <stop offset="1" stop-color="#00C853"/>
                            </radialGradient>
                            </defs>
                        </svg>

                </div>
            </a>
        </>
    );
};
