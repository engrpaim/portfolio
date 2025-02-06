import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";

export default function About(){
    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-200`;

    console.log(linkData);
    return (
        <ProfileLayout title="Projects">
            <div className={`${bgcolor} w-lvw h-lvh ease-in-out` }>
                <div className="flex mt-16">
                        Hello
                </div>
            </div>
        </ProfileLayout>
    );
}
