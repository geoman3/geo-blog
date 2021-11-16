import {  Link  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/archive'>Archive</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <div>
                <h2>Geo</h2>
            </div>
        </div>
    )
}