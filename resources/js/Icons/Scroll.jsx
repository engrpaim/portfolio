export default function scroll({ next }){
    const handleScroll = (e) => {
        e.preventDefault();
        const target = document.querySelector(next);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return(
        <>
            <a  href="/about">
                <div class="relative rounded-xl overflow-auto p-8 __web-inspector-hide-shortcut__">
                    <div class="flex justify-center">
                        <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}
