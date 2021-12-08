import {  Link  } from "react-router-dom";

import "./navbar.css"

export default function Navbar() {
    let pages = [
        {
            path: "/",
            page: "Ho"
        },
        {
            path: "/archive",
            page: "Ar"
        },
        {
            path: "/about",
            page: "Ab"
        }
    ]
    return (
        <div className="Navbar">
            <div>
                {pages.map((page) => {
                    return (
                        <Link to={page.path} className="SectionLink">
                            <h2>{page.page}</h2>
                        </Link>
                    )
                })}
            </div>
            <div className="Geo">
                <h2>GeoBlog</h2>
            </div>
        </div>
    )
}