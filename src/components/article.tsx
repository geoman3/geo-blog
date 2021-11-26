import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ARTICLES_DIR = process.env.PUBLIC_URL + "/articles/"

export default function Article() {
    const params = useParams()
    const [ articleContent, setArticleContent ] = useState("")

    // Grab the content for the article as a markdown string
    useEffect(() => {
        fetch(ARTICLES_DIR + params.title)
            .then((res) => res.text())
            .then(content => setArticleContent(content))
    }, [params])

    // Pass that to ReactMarkdown which renders it as HTML / react component
    return (
        <div>
            <ReactMarkdown children={articleContent}/>
        </div>
    )
};