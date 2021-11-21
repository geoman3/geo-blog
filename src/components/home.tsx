import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { articleMetaData } from "./archive"

import "./home.css"

export default function Home() {
    const [ archiveList, setArchiveList ] = useState<articleMetaData[]>([])

    useEffect(() => {
        fetch("/articles/articleMetaData.json")
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