"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu({}: {},
) {
    const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);
    
    const toggleNavigation = () => {
        console.log('toggleNavigation ', isComponentVisible);
        setIsComponentVisible(!isComponentVisible);
    };

    return (
        <nav className="absolute top-[20px] right-[15px]">
            <button onClick={toggleNavigation} className="block mb-8">
                <span className={`bg-white block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm ${isComponentVisible ? 
                    'rotate-45 translate-y-2' : '-translate-y-0.5'}`} ></span>
                <span className={`bg-white block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm my-1 ${isComponentVisible ? 
                    'opacity-0' : 'opacity-100'
                    }`} ></span>
                <span className={`bg-white block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm ${isComponentVisible ? 
                    '-rotate-45 -translate-y-2' : 'translate-y-0.5'
                    }`} >
                    </span>
            </button>

            <Link href="/hello">
                <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform bg-blue text-white -rotate-6"}>
                    Hello
                </button>
            </Link>
            
            <Link href="/code">
                <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform delay-200 bg-kobold text-white rotate-3"}>
                    Code
                </button>
            </Link>

            <Link href="/cosplay">
                <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform delay-500 bg-green text-white -rotate-4"}>
                    Cosplay
                </button>
            </Link>

            <Link href="/contact">
                <button className={"h-8 -mx-12  bg-hello block mb-4 overflow-hidden " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform delay-700 bg-pink text-white rotate-6"}>
                    Contact
                </button>
            </Link>
        </nav>   
    );
}