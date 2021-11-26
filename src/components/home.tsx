import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { articleMetaData } from "./archive"

import "./home.css"

// This is a quick and dirty way to store all of our articles and associated metadata
const DATABASE = process.env.PUBLIC_URL + "/articles/articleMetaData.json"

export default function Home() {
    const [ archiveList, setArchiveList ] = useState<articleMetaData[]>([])

    useEffect(() => {
        fetch(DATABASE)
            .then(ret => ret.json())
            .then(obj => setArchiveList(obj))
    }, [])

    return (
        <div className='Home'>
            <div className="Featured">
                {
                    archiveList.slice(0, 4).map((latestArticleMetadata) => {
                        return (
                            <Link className="FeaturedItem" to={"/article/" + latestArticleMetadata.filename}>
                                <div>
                                    <h2>{latestArticleMetadata.title}</h2>
                                    <p>{latestArticleMetadata.preamble}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}