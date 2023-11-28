import { Project } from "@/interfaces/project";

export const projects: Project[] = [
    {
        name: "Zelda Inventory",
        technologies: ["react", "tailwind", "next"],
        tags: ["react", "tailwind", "next"],
        description: "A clone of Zelda BOTW inventory screen. You can equip items and check their stats. Double click an item to open the context menu.",
        img: "https://res.cloudinary.com/dcm9ts1zq/image/upload/v1701189364/project-thumbnails/thumbnail-game-inventory_r0gkaw.png",
        ghLink: "https://github.com/DaniPhilo/zelda_inventory",
        projectLink: "https://zelda-inventory-pfw8mfy0e-daniphilo.vercel.app/"
    },
    {
        name: "Café de Altura API",
        technologies: ["node", "express"],
        tags: ["node", "express"],
        description: "This is the CRUD API that provides the data for the Café de Altura webpage, and that I built for GammaTech School as part of its Frontend Developer Bootcamp.",
        img: "https://res.cloudinary.com/dcm9ts1zq/image/upload/v1701186588/project-thumbnails/thumbnail-cafe-de-altura-api_texymp.png",
        ghLink: "https://github.com/DaniPhilo/cafe_de_altura_API",
        projectLink: "https://cafe-de-altura-api.vercel.app/api/coffees"
    },
    {
        name: "Café de Altura DOCS",
        technologies: ["react", "tailwind"],
        tags: ["react", "tailwind"],
        description: "This is the documentation page I created using react for my students as part of the Cafe de Altura project. It shows all the endpoints of the API, and lets you try them in real time.",
        img: "https://res.cloudinary.com/dcm9ts1zq/image/upload/v1701186588/project-thumbnails/thumbnail-cafe-de-altura-docs_is4yqx.png",
        ghLink: "https://github.com/DaniPhilo/cafe_de_altura_doc",
        projectLink: "https://cafe-de-altura-doc.netlify.app/"
    },
];