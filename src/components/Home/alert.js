import React from "react"
import { Link } from "gatsby"

// Component for notification banner on home-page

const Alert = (
    <Link to="/mysite/">
        <div class="flex mb-8 bg-indigo-800 text-center items-center py-0 w-full lg:px-0 lg:w-full">
        <div class="m-auto p-2 items-center text-white leading-none flex" role="alert">
            <span class="flex rounded-full bg-blue-700 uppercase px-2 py-1 text-xs font-bold mr-3 font-sans">Note</span>
            <span class="font-semibold mr-2 text-left flex-auto font-sans">This site is in active development. Read about the process here.</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
        </div>
    </Link>
)

export default Alert  

