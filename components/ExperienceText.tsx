import HtmlBlock from "./HtmlBlock"

const ExperienceText = () => {

    return (
        <div>
            <HtmlBlock
                title="Full Stack Developer"
                company="Fusuma"
                dates="Sep 2022 - Sep 2023"
                description="Desarrollo de aplicaciones web full-stack para distintas empresas usando Clean Architecture."
                template="experience"
            />
            <HtmlBlock
                title="Full Stack Lead Teacher"
                company="GammaTech School"
                dates="Sep 2022 - Sep 2023"
                description="Lead Teacher del bootcamp de Full Stack Developer, donde enseño, entre otras cosas, JavaScript, React, Express y SQL."
                template="experience"
            />
            <HtmlBlock
                title="Full Stack Developer"
                company="ASEAF"
                dates="May 2022 - Jun 2022"
                description="Proyecto exprés de 1 mes de duración para ayudar a la ONG ASEAF a desarrollar una aplicación Frontend / Backend para mejorar su proceso de recogida y gestión de datos. El proyecto incluyó la construcción e integración de una API en e backoffice de sus empleados y colaboradores."
                template="experience"
            />
        </div>
    )
}

export default ExperienceText