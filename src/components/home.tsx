import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { articleMetaData } from "./archive"


export default function Home() {
    const [ archiveList, setArchiveList ] = useState<articleMetaData[]>([])

    useEffect(() => {
        fetch("/articles/articleMetaData.json")
            .then(ret => ret.json())
            .then(obj => setArchiveList(obj))
    }, [])

    return (
        <div className='home'>
            <h1>Home</h1>
            <div>
                {archiveList.slice(0, 3).map((latestArticleMetadata) => {
                    return (
                        <div>
                            <Link to={"/article/" + latestArticleMetadata.filename} style={{color: "white"}}>
                                <h2>{latestArticleMetadata.title}</h2>
                            </Link>
                            <p>{latestArticleMetadata.preamble}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}