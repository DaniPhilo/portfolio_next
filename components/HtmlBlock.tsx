import HtmlTag from "./HtmlTag"

interface SingleExperienceProps {
    title: string,
    company: string,
    dates: string,
    description?: string,
    template: "experience" | "education"
}

const HtmlBlock = ({ title, company, dates, description, template }: SingleExperienceProps) => {
    return (
        <div className="mt-6">
            <HtmlTag tag="<div>" />
            <div className="ml-8">
                <div>
                    <div className="flex gap-2">
                        <HtmlTag tag="<h1>" />
                        <div>
                            <p className="text-xl font-semibold text-highlight-text">{title}</p>
                            <p className="text-highlight-text">{company}</p>
                            <p>{dates}</p>
                        </div>
                        <HtmlTag tag="</h1>" />
                    </div>
                </div>
                {
                    template === "experience" &&
                    <div className="mt-2">
                        <HtmlTag tag="<p>" />
                        <p className=" ml-10">{description}</p>
                        <HtmlTag tag="</p>" />
                    </div>
                }
            </div>
            <HtmlTag tag="<div>" />
        </div>
    )
}

export default HtmlBlock