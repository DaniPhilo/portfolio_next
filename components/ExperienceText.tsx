
interface SingleExperienceProps {
    title: string,
    company: string,
    dates: string,
    description: string
}

const HtmlTag = ({ tag }: { tag: string }) => {

    const tagElements = tag.match(/(<)(\/?)(\w+)(>)/);

    return (
        <div>
            {tagElements?.slice(1).map(el => {
                return (
                    <span
                        className={`text-sm italic ${/\w/.test(el) ? "text-red-400" : ""}`}
                    >
                        {el}
                    </span>
                )
            })}
        </div>
    )
}

const SingleExperience = ({ title, company, dates, description }: SingleExperienceProps) => {
    return (
        <div className="mt-6">
            <HtmlTag tag="<div>" />
            <div className="ml-8">
                <div>
                    <div className="flex gap-2">
                        <HtmlTag tag="<h2>" />
                        <p className="text-xl font-semibold text-highlight-text">{title}</p>
                        <HtmlTag tag="</h2>" />
                    </div>
                    <div className="flex gap-2">
                        <HtmlTag tag="<h3>" />
                        <p className="text-highlight-text">{company}</p>
                        <HtmlTag tag="</h3>" />
                    </div>
                    <div className="flex gap-2">
                        <HtmlTag tag="<span>" />
                        <p>{dates}</p>
                        <HtmlTag tag="</span>" />
                    </div>
                </div>
                <div className="mt-6">
                    <HtmlTag tag="<p>" />
                    <p className=" ml-8">{description}</p>
                    <HtmlTag tag="</p>" />
                </div>
            </div>
            <HtmlTag tag="<div>" />
        </div>
    )
}

const ExperienceText = () => {

    return (
        <div>
            <SingleExperience
                title="Full Stack Developer"
                company="Fusuma"
                dates="Sep 2022 - Sep 2023"
                description="Desarrollo de aplicaciones web full-stack para distintas empresas usando Clean Architecture."
            />
            <SingleExperience
                title="Full Stack Lead Teacher"
                company="GammaTech School"
                dates="Sep 2022 - Sep 2023"
                description="Lead Teacher del bootcamp de Full Stack Developer, donde enseño, entre otras cosas, JavaScript, React, Express y SQL."
            />
            <SingleExperience
                title="Full Stack Developer"
                company="ASEAF"
                dates="May 2022 - Jun 2022"
                description="Proyecto exprés de 1 mes de duración para ayudar a la ONG ASEAF a desarrollar una aplicación Frontend / Backend para mejorar su proceso de recogida y gestión de datos. El proyecto incluyó la construcción e integración de una API en e backoffice de sus empleados y colaboradores."
            />
        </div>

    )
}

export default ExperienceText