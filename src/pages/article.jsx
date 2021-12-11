import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

import "./article.css"

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
        <div className="Article">
            <ReactMarkdown
              className="Markdown"
              children={articleContent}
              transformImageUri={(uri) => {
                return `${process.env.PUBLIC_URL}${uri}`
              }}
              components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}/>
        </div>
    )
};