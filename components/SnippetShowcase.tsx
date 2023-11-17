"use client"

import { getGists } from "@/services/api-calls";
import { useState, useEffect } from "react"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, vs2015, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SnippetShowcase = () => {

    const [snippets, setSnippets] = useState<any[]>([]);

    useEffect(() => {
        getGists()
            .then(res => setSnippets(res));
    }, []);

    return (
        <div className="w-full space-y-8">
            {
                snippets.map((snippet, i) => {
                    console.log(snippet);

                    return (
                        <div key={i} className="w-full space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img 
                                    src={snippet.data.owner.avatar_url} 
                                    className="w-10 h-10 rounded-full"
                                    />
                                    <div className="text-xs">
                                        <p className="text-secondary-purple">@{snippet.data.owner.login}</p>
                                        <p>Created 5 months ago</p>
                                    </div>
                                </div>
                                <p className="font-semibold">{snippet.data.description}</p>
                            </div>
                            <SyntaxHighlighter
                                language="javascript" 
                                style={atomOneDark}
                                customStyle={{backgroundColor: "#011221", fontSize: "0.7em", padding: "1rem", borderRadius: "5px", width: "100%"}}
                            >
                                {snippet.data.files[Object.keys(snippet.data.files) as any].content}
                            </SyntaxHighlighter>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SnippetShowcase