import {  Link  } from "react-router-dom";

const pages = [
    {
        path: "/",
        page: "Home"
    },
    {
        path: "/archive",
        page: "Archive"
    },
    {
        path: "/about",
        page: "About"
    }
]

export default function Navbar() {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                {pages.map((page) => {
                    return (
                        <Link to={page.path} style={{flex: "0 0 6rem", color: "white"}}>
                            <h2>{page.page}</h2>
                        </Link>
                    )
                })}
            </div>
            <div>
                <h2>Geo</h2>
            </div>
        </div>
    )
}