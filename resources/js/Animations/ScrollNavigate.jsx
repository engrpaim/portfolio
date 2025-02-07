import { Inertia } from "@inertiajs/inertia";
import { useEffect , useState } from "react";

const ScrollNavigate  = ({next,back}) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [mouseStart, setMouseStart] = useState(0);
    const [mouseEnd, setMouseEnd] = useState(0);

    useEffect(() => {
        const handleScroll = () => {

          const bottom = document.documentElement.scrollHeight === document.documentElement.scrollTop + window.innerHeight;
          console.log(window.innerHeight);
          console.log(  document.documentElement.scrollTop);
          if (bottom) {

            const nextPageUrl = next;

            Inertia.visit(nextPageUrl);
          }

          if (document.documentElement.scrollTop == 0) {

            const nextPageUrl = back;

            Inertia.visit(nextPageUrl);
          }


        };


        const handleTouchStart = (e) =>{
            setTouchStart(e.targetTouches[0].clientX)
          }

        const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
        };

        const handleMouseDown = (e) => {
            setMouseStart(e.clientX);
          };

        const handleMouseUp = (e) => {
        setMouseEnd(e.clientX);
        handleSwipe(mouseStart, mouseEnd);
        };

        const handleSwipe = () => {
            if (touchEnd < touchStart) {

                Inertia.visit(next);
            }

            if (touchEnd > touchStart) {

                Inertia.visit(back);
            }
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("touchstart", handleTouchStart);
          window.removeEventListener("touchend", handleTouchEnd);
          window.addEventListener("mousedown", handleMouseDown);
          window.addEventListener("mouseup", handleMouseUp);
        };
      }, []);
};

export { ScrollNavigate };
