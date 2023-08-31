import React from "react";


export const NavBar = () => {
    return (
        <>
            <div className="nav-bar">

                <nav className="mb-5">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <a href="/" className="flex">
                            <img src="GD.png" alt="icon GD" width="100" height="70"/>
                            <span className="self-center text-lg font-semibold whitespace-nowrap">Glossary For Developers</span>
                        </a>
                        <div className="hidden md:flex justify-between items-center w-full md:w-auto">
                            <div className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                                <div className="link-containner">
                                    <a href="/" className="" aria-current="page">Home</a>
                                </div>
                                <div className="link-containner">
                                    <a href="/addWord" className="">Add Word</a>
                                </div>
                                <div className="link-containner">
                                    <a href="/searchWord" className="">Search Word</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}
