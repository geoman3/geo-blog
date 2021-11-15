import ReactMarkdown from "react-markdown"
import { useState } from "react"

function loadArticlePreviews() {
    fetch("./archive/articleMetaData")
};

function useArticle() {
    const [ currentArticle, setCurrentArticle ] = useState<string>("")
    fetch("./archive/articleFoo.md")
        .then((res) => res.text())
        .then(content => setCurrentArticle(content))
    return <ReactMarkdown children={currentArticle} />
};

export default function Articles() {
    return (
        <div className='articles'>
            <h1>Articles</h1>
            <div>
                {useArticle()}
            </div>
        </div>
    )
};