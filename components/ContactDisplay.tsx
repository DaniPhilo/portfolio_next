"use client"

import { useState } from "react"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface FromDataInterface {
    name: string,
    email: string,
    message: string
}

const ContactDisplay = () => {

    const [formData, setFormData] = useState<FromDataInterface>({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ name: "", email: "", message: "" })
        console.log(formData);
    }

    return (
        <div className="h-full col-span-2 grid lg:grid-cols-2 overflow-y-auto">
            <div className="flex justify-center items-center lg:overflow-y-scroll text-sm 2xl:text-base">
                <form className="w-2/3 flex flex-col gap-8" onSubmit={handleSubmit}>
                    <div className="grid space-y-2">
                        <label htmlFor="name">_name:</label>
                        <input type="text" name="name" className="p-1 2xl:p-2 bg-background-darker-fill border border-line-color rounded" onChange={handleChange} value={formData.name} />
                    </div>
                    <div className="grid space-y-2">
                        <label htmlFor="email">_email:</label>
                        <input type="text" name="email" className="p-1 2xl:p-2 bg-background-darker-fill border border-line-color rounded" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className="grid space-y-2">
                        <label htmlFor="message">_message:</label>
                        <textarea name="message" cols={20} rows={10} className="p-1 2xl:p-2 max-h-20 2xl:max-h-40 bg-background-darker-fill border border-line-color rounded" onChange={handleChange} value={formData.message} ></textarea>
                    </div>
                    <input type="submit" value={"submit-message"} className="py-2 px-4 text-highlight-text bg-line-color rounded cursor-pointer" />
                </form>
            </div>
            <div className="hidden h-full lg:flex justify-center items-center px-6 border-l border-line-color overflow-y-scroll">
                <SyntaxHighlighter language="javascript" style={vs2015} wrapLines wrapLongLines showLineNumbers customStyle={{backgroundColor: "#011221", padding: "2rem 1rem", width: "100%", borderRadius: "5px"}} >
                    {`const form = document.querySelector('form');

const message = {
    name: '${formData.name}',
    email: '${formData.email}', 
    message: '${formData.message}',
    date: '${new Date().toISOString().slice(0, 10)}'
}

form.addEventListener('submit', () => {
    console.log(message);
})`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default ContactDisplay