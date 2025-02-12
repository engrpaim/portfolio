import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";

export default function About(){
    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-200`;

    console.log(linkData);
    return (
        <ProfileLayout title="C">
            <div className={`${bgcolor} h-lvh min-h-fit w-lvw  transition-all`}>
                <div className="flex flex-col-reverse items-center justify-center md:flex-row ">
                <article className="space-y-4 text-xs leading-relaxed text-center break-words text-wrap space md:text-3xl">
                            <p className="space-y-10">
                                <h1 className="font-[1000] lg:text-5xl text-2xl md:text-5xl my-2">
                                HI , I'M EPHRAIM <h6>/ˈē-fri-əm/</h6></h1><br/>
                                A Results-Driven Web Developer specializing in <br className="md:hidden"/> Creating , Managing websites <br className="hidden md:block"/>
                                And Web applications that contribute to the success of the overall product.
                            </p>
                        </article>
                </div>
            </div>
        </ProfileLayout>
    );
}
