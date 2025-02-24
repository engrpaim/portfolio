import ProfileLayout from "@/Layouts/ProfileLayout";
import Phone from "@/Icons/phone";
import { findLink } from "@/Arrays/FindLink";
import { Link } from "@inertiajs/react";
import Profile from "@/Icons/Profile.png";
import Scroll from "@/Icons/Scroll";
export default function About(){


    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-100`;


    return (
        <ProfileLayout title="About">
             <div className={`bg-gradient-to-bl from-purple-200 via-sky-100 to-blue-50  h-lvh min-h-fit w-lvw  transition-all`}>

                <div className="flex flex-col items-center justify-center mt-20 md:mt-20">
                    <div className="text-[3rem] md:text-[7rem]   font-semibold text-slate-900 "><h1 className="drop-shadow-lg">I'm Ephraim.</h1></div>

                    <div className="justify-center w-screen md:grid md:grid-cols-2 min-w-fit min-h-fit">

                        <div className="flex justify-center w-full h-full m-2 min-w-fit min-h-fit ">
                            <div className="flex bg-white w-80 h-96 ">

                            </div>
                        </div>

                        <div className="flex flex-col flex-wrap md:mx-5 min-w-fit">
                            <div className="grid grid-flow-row h-fit w-fit">
                                <div className="flex text-center justify-center md:w-full p-[0.5rem] h-fit  min-w-fit">
                                    <h1 className="text-[1.2rem] md:text-[2.5rem] justify-center text-start font-extrabold px-[1.5rem]  md:pr-[10rem] min-w-fit">
                                        I'm a Web Developer specializing in building and optimizing websites to enhance and streamline production processes.</h1>
                                </div>
                                <div className="flex mx-[1rem] justify-center md:w-full   md:h-fit h-fit  md:pr-[8rem] min-w-fit">
                                    <p className="text-[1rem] md:text-[1.5rem]  justify-center px-[1rem]    md:pr-[10rem] text-justify min-w-fit">
                                        I specialize in building tools for data gathering, product dimension checks, and QR code generation to improve workflow efficiency.
                                        I'm currently seeking job opportunities to leverage my skills in enhancing production environments through web development.
                                    <br/><br/>
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex text-[1rem] w-[18rem] md:text-[1.7rem] text-white justify-between rounded-full bg-gradient-to-r from-cyan-900 to-blue-900 h-[3rem] mt-5 md:w-[28rem] md:h-[5rem] md:mt-[8rem] items-center px-5 md:px-9 hover:shadow-lg ">
                        <div>
                            <h1 className="font-bold ">Automation Engineer</h1>
                        </div>
                        <div>
                            <h1 className="font-bold">23~25</h1>
                        </div>
                    </div>
                    <div className="flex w-fit rounded-[1rem] h-fit md:w-[100rem]  bg-sky-50 my-[5rem] md:rounded-[7rem] drop-shadow-2xl">
                        <div className="grid items-start w-full grid-flow-row min-h-fit md:grid-cols-2 md:grid-rows-2 min-w-fit ">
                            <div className="flex items-center justify-center p-[1.2rem] md:p-[5rem] ">
                                <div className="text-[1.2rem] md:text-[2rem] bg-white md:w-[400rem]">
                                    <div className="w-fit">
                                        <h1 className="font-semibold">01</h1>
                                        <h1 className="font-bold">PLAN</h1>
                                        <h3 className="text-[1.1rem] md:text-[1.5rem]">Facilitate a meeting to discuss the production requirements for enhancing data gathering efficiency, visualizing production metrics, and developing functions to automate specific tasks through web development.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[1.2rem] md:p-[5rem] ">
                                <div className="text-[1.2rem] md:text-[2rem] bg-white md:w-[400rem]">
                                    <div className="w-fit">
                                        <h1 className="font-semibold">02</h1>
                                        <h1 className="font-bold">DESIGN</h1>
                                        <h3 className="text-[1.1rem] md:text-[1.5rem]">Crafted and optimized the UX/UI design by aligning with production requirements, ensuring a seamless and intuitive user experience.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[1.2rem] md:p-[5rem] ">
                                <div className="text-[1.2rem] md:text-[2rem] bg-white md:w-[400rem]">
                                    <div className="w-fit">
                                        <h1 className="font-semibold">03</h1>
                                        <h1 className="font-bold">COLLABORATE</h1>
                                        <h3 className="text-[1.1rem] md:text-[1.5rem]">Great ideas don’t come from one mind; they are born from the synergy of many, from the collective spark that emerges when diverse perspectives come together. In the world of creativity, collaboration is not just a tool—it's the heartbeat that drives innovation.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[1.2rem] md:p-[5rem] ">
                                <div className="text-[1.2rem] md:text-[2rem] bg-white md:w-[400rem]">
                                    <div className="w-fit">
                                        <h1 className="font-semibold">04</h1>
                                        <h1 className="font-bold">ADAPTABLE</h1>
                                        <h3 className="text-[1.1rem] md:text-[1.5rem]">In the ever-evolving world of web development, adaptability is essential. I embrace change and view each new technology, tool, and trend as an opportunity to grow and improve.</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex md:w-[100rem] mt-0 mb-[2rem] md:mb-[6rem]  justify-self-start mt-7">
                        <Phone></Phone>
                    </div>
                </div>

            </div>

        </ProfileLayout>
    );
}
