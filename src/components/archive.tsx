import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
            <div style={{display: "flex", flexDirection: "column"}}>
                {archiveList.map((articleMetadata) => {
                    return <Link to={"/article/" + articleMetadata.filename} style={{color: "white"}}>{articleMetadata.title}</Link>
                })}
            </div>
        </div>
    )
};