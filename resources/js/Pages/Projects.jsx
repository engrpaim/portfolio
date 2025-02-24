import ProfileLayout from "@/Layouts/ProfileLayout";
import { findLink } from "@/Arrays/FindLink";
import Website from "@/Icons/website.jpg";
export default function About(){
    const linkData = findLink();

    const bgcolor = `bg-${linkData.color}-200`;

    console.log(linkData);
    return (
        <ProfileLayout title="Projects">
            <div className={`bg-gradient-to-bl from-purple-400 via-sky-200 to-blue-100 h-lvh min-h-fit w-lvw  transition-all` }>
                <div className="flex mt-20 items-center justify-center text-center ">
                    <div className="flex flex-col h-[35rem] w-[30rem] bg-gray-50 shadow-xl rounded-3xl  text-center items-center ">
                        <div className="py-5">
                           <h1 className="font-bold"> HELLO </h1> 
                        </div>
                      
                        <div className="mx-4">
                            <img src={Website} className="rounded" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}

