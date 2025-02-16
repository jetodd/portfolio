"use client";

import Link from "next/link";
import { useState } from "react";

export interface Menu {
    currentPage: string;
    color?: string;
}

export default function Menu({
    currentPage,
    color = 'white'
}: Menu)
{
    const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);
    
    const toggleNavigation = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    return (
        <nav className="absolute top-[30px] right-[25px] z-100">
            <button onClick={toggleNavigation} className="block mb-8">
                <span className={`block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm ${isComponentVisible ? 
                    'rotate-45 translate-y-2' : '-translate-y-0.5'}`} 
                    style={{ ["backgroundColor" as any]: `var(--color-${color})`}}></span>
                <span className={`bg-${color} block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm my-1 ${isComponentVisible ? 'opacity-0' : 'opacity-100'}`}
                    style={{ ["backgroundColor" as any]: `var(--color-${color})` }}></span>
                <span className={`bg-${color} block transition-all duration-200 ease-out 
                    h-1 w-10 rounded-sm ${isComponentVisible ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`} 
                    style={{ ["backgroundColor" as any]: `var(--color-${color})` }}>
                    </span>
            </button>

            {}

            {currentPage !== 'hello' && (
                <Link href="/hello">
                <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden bg-blue text-sky rounded-lg " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform -rotate-6 hover:scale-105 hover:rotate-6"}>Hello</button>
                </Link>
            )}

            {currentPage !== 'code' && (
                <Link href="/code">
                    <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden bg-kobold text-azure rounded-lg " +
                        (isComponentVisible ? "w-24" : "w-0") +
                        " transition-all duration-500 ease-in-out transform delay-200 rotate-3 hover:scale-105 hover:-rotate-6"}>Code</button>
                </Link>
            )}
            
            {currentPage !== 'cosplay' && (
                <Link href="/cosplay">
                    <button className={"h-8 -mx-12 bg-hello block mb-4 overflow-hidden bg-green text-mint rounded-lg " +
                        (isComponentVisible ? "w-24" : "w-0") +
                        " transition-all duration-500 ease-in-out transform delay-500 -rotate-6 hover:scale-105 hover:rotate-3"}>Cosplay</button>
                </Link>
            )}
            
            {currentPage !== 'contact' && (
                <Link href="/contact">
                <button className={"h-8 -mx-12  bg-hello block mb-4 overflow-hidden bg-pink text-rose rounded-lg " +
                    (isComponentVisible ? "w-24" : "w-0") +
                    " transition-all duration-500 ease-in-out transform delay-700 rotate-6 hover:scale-105 hover:-rotate-3"}>Contact</button>
            </Link>
            )}
        </nav>   
    );
}