import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";

export default function About(){
    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-200`;

    console.log(linkData);
    return (
        <ProfileLayout title="Projects">
            <div className={`${bgcolor} h-lvh min-h-fit w-lvw  transition-all` }>
                <div className="flex flex-col-reverse items-center justify-center md:flex-row ">

                </div>
            </div>
        </ProfileLayout>
    );
}

