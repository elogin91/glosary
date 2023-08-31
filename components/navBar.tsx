import React from "react";


export const NavBar = () => {
    return (
        <>
            <div className="mx-auto">

                <nav className=" bg-light px-2 mb-10">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <a href="#" className="flex">
                            <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" >ICONO</svg>
                            <span className="self-center text-lg font-semibold whitespace-nowrap">GlosaryDEV</span>
                        </a>

                        <div className="hidden md:flex justify-between items-center w-full md:w-auto">
                            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a href="/" className="" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="/addWord" className="">Add Word</a>
                                </li>
                                <li>
                                    <a href="/searchWord" className="">Search Word</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}
