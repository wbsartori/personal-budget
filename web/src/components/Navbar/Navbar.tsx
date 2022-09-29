import React from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <h1 className="text-6xl text-white font-black mt-20">
                Navbar
            </h1>
        </div>
    );
}