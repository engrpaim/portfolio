import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";
import { Link } from "@inertiajs/react";
import Profile from "@/Icons/Profile.png";

export default function About(){


    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-100`;


    return (
        <ProfileLayout title="About">
             <div className={`bg-gradient-to-bl from-purple-200 via-sky-100 to-blue-50  h-lvh min-h-fit w-lvw  transition-all`}>
                <div className="flex flex-col items-center justify-center mt-20 md:mt-5">
                    <div className="text-[4rem] md:text-[12rem]   font-semibold text-slate-900"><h1>SMP.</h1></div>

                    <div className="justify-center w-screen h-screen md:grid md:grid-cols-2">
                        <div className="flex flex-col">
                            <div className="grid grid-flow-row h-fit w-fit">
                                <div className="flex text-center justify-center bg-white md:w-[55rem] p-[0.5rem] h-fit  ">
                                    <h1 className="text-[2rem] md:text-[2.5rem] text-center font-base">I'm a Web Developer from Laguna, Philippines</h1>
                                </div>
                                <div className="flex m-[1rem] bg-white md:h-fit h-lvh">
                                    <p className="md:text-[1.5rem]  justify-center p-[4rem]">
                                    I’m a Web Developer with a focus on building and managing websites that drive the success of production processes.
                                    My expertise lies in data gathering, creating tools for product dimension checks, generating QR codes for streamlined processes, and continuously improving existing websites to meet evolving business needs.
                                    With a passion for solving problems and optimizing workflows, I specialize in delivering practical, user-friendly solutions that help businesses achieve operational efficiency.
                                    <br/><br/>
                                    I am currently open to job opportunities where I can contribute my skills, continue learning, and grow professionally.
                                    If you have an exciting opportunity that aligns with my experience and expertise, please don’t hesitate to reach out.
                                    <br/><br/>
                                   <strong>Let’s connect!</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-full bg-black"><div className="flex bg-white w-96 h-96 "></div></div>


                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}
