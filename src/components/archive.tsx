import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        fetch("/articles/articleMetaData.json")
            .then(ret => ret.json())
            .then(obj => setArchiveList(obj))
    }, [])

    return (
        <div className='archive'>
            <h1>Archive</h1>
            <div>
                {archiveList.map((articleMetadata) => {
                    return <Link to={"/article/" + articleMetadata.filename} style={{color: "white"}}>{articleMetadata.title}</Link>
                })}
            </div>
        </div>
    )
};