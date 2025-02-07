import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";
import { Link } from "@inertiajs/react";
import Profile from "@/Icons/Profile.png";

export default function About(){


    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-100`;


    return (
        <ProfileLayout title="About">
            <div className={`${bgcolor} h-lvh min-h-fit w-lvw md:h-full lg:h-full transition-all` }>
                <div className="flex flex-col-reverse items-center justify-center md:flex-row ">
                    <div className="flex items-center justify-center w-full mt-20 mb-40 md:mt-0 md:h-svh md:w-1/3 md:justify-normal">
                        <div className="flex flex-wrap items-center justify-center h-20 text-center bg-gray-200 shadow-lg h-min-fit w-60 md:w-20 md:h-80 md:block drop-shadow-xl">
                            <div className="p-0.5  md:hover:bg-blue-200 h-1/3  md:hover:scale-110 hover:md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <a href="https://linkedin.com/in/jose-ephraim-batacan-51a35524a" target="_blank" >
                                    <svg id="LGlinked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-20 h-20 mt-10 md:m-5 md:mt-8 fill-blue-900 md:fill-black md:hover:fill-blue-900">
                                        <path fill="current"  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" />
                                        <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05" />
                                        <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" />
                                        <path id="remain-white" fill="white" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="p-0.5 md:fill-none md:hover:bg-yellow-200 h-1/3 md:hover:scale-110 md:hover:drop-shadow-[5px_35px_35px_rgba(0,0,0,0.25)]">
                                <a href="https://github.com/engrpaim" target="_blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mt-10 mr-10 fill-yellow-600 md:fill-gray-800 md:m-6 md:mt-9 md:hover:fill-yellow-700" fill="currentColor"  viewBox="0 0 30 30">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="p-0.5 md:hover:bg-red-200 h-1/3 md:hover:scale-110 md:hover:drop-shadow-[5px_35px_35px_rgba(0,0,0,0.25)]">
                                <a href="mailto:joseephraimbatacan@gmail.com" target="_blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-20 ml-40 md:mb-40 fill-red-800 md:fill-gray-800 md:m-6 md:mt-3 md:hover:fill-red-700" viewBox="0 -500 960 960"  fill="currentColor">
                                        <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full text-center mb-30 md:w-1/3 md:h-svh min-w-fit md:mb-44">
                        <article className="space-y-4 text-xs leading-relaxed text-center break-words text-wrap space md:text-3xl">
                            <p className="space-y-10">
                                <h1 className="font-[1000] lg:text-5xl text-2xl md:text-5xl my-2">
                                HEY , I'M JOSE BATACAN</h1><br/>
                                A Results-Driven Web Developer specializing in <br className="md:hidden"/> Creating , Managing websites <br className="hidden md:block"/>
                                And Web applications that contribute to the success of the overall product.
                            </p>
                        </article>
                    </div>
                    <div className="flex items-center justify-center w-1/3 md:h-svh min-h-fit">
                        <img src={Profile} alt="Picture of Developer"  className="max-w-full mt-32 mb-20 md:mt-0 md:mb-52"/>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}
