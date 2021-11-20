import {  Link  } from "react-router-dom";

export default function Navbar() {
    let pages = [
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
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                {pages.map((page) => {
                    return (
                        <Link to={page.path} style={{flex: "0 0 auto", color: "white", margin: "0 1rem"}}>
                            <h2>{page.page}</h2>
                        </Link>
                    )
                })}
            </div>
            <div style={{margin: "0 1rem"}}>
                <h2>Geo</h2>
            </div>
        </div>
    )
}