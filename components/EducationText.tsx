import HtmlBlock from "./HtmlBlock"

const EducationText = () => {
    return (
        <div>
            <HtmlBlock
                title="Full Stack Web Development Bootcamp"
                company="The Bridge"
                dates="Jan 2022 - May 2022"
                template="education"
            />
            <HtmlBlock
                title="Máster de Profesorado (MESOB)"
                company="Universidad Autónoma de Madrid"
                dates="2018 - 2019"
                template="education"
            />
            <HtmlBlock
                title="Grado en Filosofía"
                company="Universidad Autónoma de Madrid"
                dates="2013 - 2017"
                template="education"
            />
        </div>

    )
}

export default EducationText