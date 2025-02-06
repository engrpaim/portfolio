import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";
import Profile from "@/Icons/Profile.png";

export default function About(){
    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-100`;

    console.log(linkData);
    return (
        <ProfileLayout title="About">
            <div className={`${bgcolor} w-lvw h-full ease-in-out` }>
                <div className="grid items-center justify-center mt-16 md:grid-flow-col md:justify-normal">
                    <div>
                        <img src={Profile} alt="Picture of Developer" />
                    </div>
                    <div>
                        <img src={Profile} alt="Picture of Developer" />
                    </div>
                    <div>
                        <img src={Profile} alt="Picture of Developer" />
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}
