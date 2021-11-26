import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./archive.css"

// This is a quick and dirty way to store all of our articles and associated metadata
const DATABASE = process.env.PUBLIC_URL + "/articles/articleMetaData.json"

export type articleMetaData = {
    filename: string,
    author: string,
    timestamp: number,
    title: string,
    preamble: string
}

export default function Archive() {
    const [ archiveList, setArchiveList ] = useState<articleMetaData[]>([])

    useEffect(() => {
        fetch(DATABASE)
            .then(ret => ret.json())
            .then(obj => setArchiveList(obj))
    }, [])

    return (
        <div className='archive'>
            <h1>Archive</h1>
            <div className="archiveList">
                {archiveList.map((articleMetadata) => {
                    let articleDate = new Date(articleMetadata.timestamp)
                    return (
                        <div className="archiveItem">
                            <Link to={"/article/" + articleMetadata.filename}>
                                <p>{articleMetadata.title}</p>
                                <p>- {articleDate.toISOString().split("T")[0]}</p>
                            </Link>
                            <div></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};