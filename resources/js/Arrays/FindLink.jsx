import { usePage } from "@inertiajs/react";
import { links } from "./HrefDetails";

 const findLink = () => {
    const { url } = usePage();
    const findData = links.find(link => url === link.href);
    console.log(findData);

    return findData;
};

export { findLink };
