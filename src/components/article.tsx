import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const articlesDir = "/articles/"

export default function Article() {
    const params = useParams()
    const [ articleContent, setArticleContent ] = useState("")

    useEffect(() => {
        fetch(articlesDir + params.title)
            .then((res) => res.text())
            .then(content => setArticleContent(content))
    }, [params])

    return (
        <ReactMarkdown children={articleContent}/>
    )
};