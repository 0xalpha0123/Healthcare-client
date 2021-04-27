import React, { useState } from "react";

const Collapsible = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="border border-gray-300 lg:w-40 h-12 rounded-full text-gray-600 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onFocus={(event => {

            })}
        >
            <div className="h-full w-full text-center" onClick={(e) => setIsOpen(!isOpen)}>
                Filters
            </div>
            {isOpen &&
            <div className="flex-col md:w-60 border border-gray-300 bg-white">
                {children}
            </div>}
        </div>
    )
}

export default Collapsible