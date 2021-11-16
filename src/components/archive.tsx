import { Link } from "react-router-dom"

export default function Archive() {
    return (
        <div className='archive'>
            <h1>Archive</h1>
            <div>
                <li>
                    <Link to='/article/articleFoo.md'>Foo Article</Link>
                </li>
            </div>
        </div>
    )
};